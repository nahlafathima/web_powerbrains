import React from 'react';
import './WhoWeAre.css';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const WhoWeAre = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    };
  return (
    <div className="who-we-are">
        <h1>Who <span>we</span> are?</h1>
        <p>
          Digital visionaries breaking boundaries in web development, mobile development,
          digital<br/> marketing, and multimedia solutions. We don't just solve problems—we
          reimagine <br/>potential, transforming digital landscapes with a decade of
          razor-sharp expertise.
        </p>
        <h2>Let's move Together!</h2>
        <div className="arrow-icon" onClick={() => handleNavigation('/Who we are')}>
          <FaArrowRight />
        </div>
    </div>
  );
};

export default WhoWeAre;
