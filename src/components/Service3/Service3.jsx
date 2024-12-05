import React, { useState, useRef, useEffect } from 'react';
import img2 from '../../assets/images/img2.png';
import './Service3.css';
import { useNavigate } from 'react-router-dom';

const Service3 = () => {
  const navigate = useNavigate();
  
  // State to track visibility of the "Our Services" section
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Ref for the "Our Services" section

  // Scroll detection logic using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the section is in view, set isVisible to true
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to navigate to another page
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="service-container">
      <div className="service-image-section">
        <img
          src={img2}
          alt="Visualization"
          className="service-image"
        />
      </div>
      <div className="service-text-section" ref={sectionRef}>
        <div className="section">
          <h1 className={isVisible ? 'animate' : ''}>Our Services</h1>
          <p>
            We specialize in delivering tailored solutions designed to streamline processes, enhance efficiency, and drive measurable growth for your business.
          </p>
        </div>
        <div className="section1">
          <div className="div-section">
            <h1>Frontend Development</h1>
          </div>
          <div className="div-section">
            <h1>Backend Development</h1>
          </div>
          <div className="div-section">
            <h1>Mobile Development</h1>
          </div>
          <div className="div-section">
            <h1>Digital Marketing</h1>
          </div>
        </div>
        <button className="sec-btn" onClick={() => handleNavigation('/Services')}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Service3;
