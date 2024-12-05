import React from 'react';
import img2 from '../../assets/images/img2.png';
import './Service3.css';
import { useNavigate } from 'react-router-dom';

const Service3 = () => {
    const navigate = useNavigate();

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
      <div className="service-text-section">
        <div className='section'>
        <h1> Our Services</h1>
        <p>
          We at PowerbrainLabs are committed to delivering innovative solutions
          tailored to your needs. Join us to explore the future of technology
          and efficiency.
        </p>
        </div>
        <div className='section1'>
        <div className='div-section'>
            <h1>Frontend Development</h1>
        </div>
        <div className='div-section'>
            <h1>Backend Development</h1>
        </div>
        <div className='div-section'>
            <h1>Mobile Development</h1>
        </div>
        <div className='div-section'>
            <h1>Digital Marketing</h1>
        </div>
        </div>
        <button className='sec-btn' onClick={() => handleNavigation('/Services')}>Learn More</button>
      </div>
    </div>
  );
}

export default Service3;
