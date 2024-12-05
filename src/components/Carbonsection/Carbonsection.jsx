import React, { useState, useEffect, useRef } from 'react';
import "./CarbonSection.css";
import { MdRocketLaunch } from "react-icons/md";

const Carbonsection = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  const impactSectionRef = useRef(null);  
  const headingRef = useRef(null); 

  
  const animateNumber = (start, end, setter, duration) => {
    let current = start;
    const step = (end - start) / (duration / 70); 
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setter(current % 1 === 0 ? Math.round(current) : current.toFixed(1));
    }, 30); 
  };

  
  const handleScroll = () => {
    const rect = impactSectionRef.current.getBoundingClientRect();
    const headingRect = headingRef.current.getBoundingClientRect();
    
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      animateNumber(0, 10, setNumber1, 1000); 
      animateNumber(0, 200, setNumber2, 1500);  
      animateNumber(0, 99.8, setNumber3, 2000); 
      window.removeEventListener("scroll", handleScroll);
    }
    
    
    if (headingRect.top <= window.innerHeight && headingRect.bottom >= 0) {
      headingRef.current.classList.add('animate-heading');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="carbon-container">
      <div className="carbon-header">
        <h1 ref={headingRef}>
          Powerbrain is <span className="highlight">Redifining</span> Innovation
        </h1>
        <p>
          Our team of experienced IT professionals is dedicated to delivering
          exceptional results and exceeding client expectations.
        </p>
      </div>
      <div className="impact-section" ref={impactSectionRef}>
        <div className="icon-section">
          <div className="icon-container">
            <span className="icon"><MdRocketLaunch /></span>
          </div>
        </div>
        
        <div className="impact-stats">
          <h2>Our Impact</h2>
          <div className="stat">
            <span className="number1">{number1}</span>
            <span className="text">+ YEARS OF TECHNOLOGICAL EXPERTISE</span>
          </div>
          <div className="stat">
            <span className="number2">{number2}</span>
            <span className="text">% AVG CLIENT EFFICIENCY IMPROVEMENT</span>
          </div>
          <div className="stat">
            <span className="number3">{number3}</span>
            <span className="text">PROJECT SUCCESS RATE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carbonsection;
