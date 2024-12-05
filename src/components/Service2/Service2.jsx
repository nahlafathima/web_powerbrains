import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaBullhorn } from 'react-icons/fa';
import './Service2.css';

const Service2 = () => {
    return (
        <div className='browse'>
            <h1>What we are providing ?</h1>
            <p>Powerbrain offers a UNIQUE DISTRIBUTION MODEL with an Attractive Pricing</p>

            <div className='browse-category'>
                <div className='list-category'>
                    <div className='category-text'>
                        <h1><FaLaptopCode /> Web Development</h1>
                        <p>Transform your online presence with our custom web development solutions:</p>
                        <ul>
                            <li><span>Custom Website Design:</span> Unique, responsive websites tailored to your brand</li>
                            <li><span>E-commerce Development:</span> Robust online stores with secure payment integration</li>
                            <li><span>Web Application Development:</span> Scalable, interactive web applications</li>
                            <li><span>Website Maintenance and Support:</span> Ongoing technical support and updates</li>
                        </ul>
                    </div>
                </div>
                <div className='list-category'>
                    <div className='category-text'>
                        <h1><FaMobileAlt /> Mobile Development</h1>
                        <p>Reach customers on-the-go with our mobile development expertise.</p>
                        <ul>
                            <li><span>iOS App Development:</span> Native applications for Apple devices</li>
                            <li><span>Android App Development:</span> Customized apps for the Android ecosystem</li>
                            <li><span>Cross-Platform Development:</span> Unified apps working across multiple platforms</li>
                            <li><span>Mobile UI/UX Design:</span> Intuitive and engaging mobile interfaces</li>
                        </ul>
                    </div>
                </div>
                <div className='list-category'>
                    <div className='category-text'>
                        <h1><FaBullhorn /> Digital Marketing</h1>
                        <p>Amplify your online visibility and attract more customers.</p>
                        <ul>
                            <li><span>Search Engine Optimization (SEO):</span> Improve your website's search engine rankings</li>
                            <li><span>Social Media Marketing:</span> Strategic campaigns across multiple platforms</li>
                            <li><span>Pay-Per-Click (PPC) Advertising:</span> Targeted ad campaigns</li>
                            <li><span>Content Marketing:</span> Engaging content strategy to drive audience engagement</li>
                            <li><span>Email Marketing:</span> Personalized email campaigns and newsletter management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service2;
