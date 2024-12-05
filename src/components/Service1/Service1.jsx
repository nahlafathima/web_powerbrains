import React from 'react'
import img1 from '../../assets/images/img1.png'
import './Service1.css'

const Service1 = () => {
  return (
    <div className="container">
      <div className="text-section">
        <p> We at PowerbrainLabs are committed to delivering innovative solutions
          tailored to your needs. Join us to explore the future of technology
          and efficiency.</p>
      </div>
      <div className="image-section">
        <img
          src={img1}
          alt="Visualization"
          className="angled-image"
        />
      </div>
    </div>
  )
}

export default Service1
