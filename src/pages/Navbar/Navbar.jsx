import React,{useState} from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMenuOpen(false); 
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); 
      };

  return (
    <div className='navbar-container'>
      {/* <div className='logo'>
        <img src='' alt=''/>
      </div> */}
      <div className='logo_text'>
        <h2>PowerbrainLabs</h2>
      </div>

      <ul className={`menu ${menuOpen ? 'menu-open' : ''}`}>
          <li onClick={() => handleNavigation('/')}>Home</li>
          <li onClick={() => handleNavigation('/Who we are')}>Who we are</li>
          <li onClick={() => handleNavigation('/Services')}>Services</li>
          <li onClick={() => handleNavigation('/Works')}>Works</li>
          
          <li onClick={() => handleNavigation('/Contact')}>Contact</li>
    </ul>
    <div className="icons-mobile" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
    </div>
    </div>
  )
}

export default Navbar
