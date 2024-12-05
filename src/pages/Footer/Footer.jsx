import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'
import logo1 from '../../assets/images/Logo.svg'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='main'>
                    <h2><img src={logo1} alt=""/>PowerbrainLabs</h2>
                    <address>India, Dubai, London</address>
                </div>
                <div className='links'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li onClick={() => handleNavigation('/')}>Home</li>
                        <li onClick={() => handleNavigation('/Who we are')}>Who we are</li>
                        <li onClick={() => handleNavigation('/Services')}>Services</li>
                        <li onClick={() => handleNavigation('/Works')}>Works</li>
                        <li onClick={() => handleNavigation('/Contact')}>Contact</li>

                    </ul>
                </div>
                <div className='help'>
                    <h2>Help</h2>
                    <ul>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>
                <div className='newsletter'>
                    <h2>Connect</h2>
                    <div className='connect'>
                        <ul>
                            <li>Email : support@powerbrainlabs.com</li>
                            <li>Contact No : +91 7994805975</li>
                        </ul>
                        <div className='connect-link'>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon twitter" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="social-icon facebook" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon instagram" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="social-icon linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©2024 PowerbrainLabs. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
