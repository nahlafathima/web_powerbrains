import React from 'react'
import './Introsection.css'
import background from '../../assets/images/backimg.jpg'
import { useNavigate } from 'react-router-dom'


const Introsection = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/')
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className='Introsection-container'>
            <div className='Introsection-text'>
                <h1>Digital Brilliance,<br/> Crafted for You <br/>Join with Powerbrain</h1>
                <p></p>

                <button className='Introsection-button' onClick={() => handleNavigation('/')}>Join Now</button>
            </div>
            <div className='Introsection-img'>
                <img src={background} alt="" />
            </div>
        </div>
    )
}

export default Introsection
