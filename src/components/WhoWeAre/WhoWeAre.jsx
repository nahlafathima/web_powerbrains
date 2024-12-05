import React from 'react';
import './WhoWeAre.css';
import { FaArrowRight } from 'react-icons/fa';

const WhoWeAre = () => {
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
        <div className="arrow-icon">
          <FaArrowRight />
        </div>
    </div>
  );
};

export default WhoWeAre;
