import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/main logo.png';

const Header = () => {
    return (
        <header>
        <div>
          <img src={logo} alt="" />
          <nav>
            <ul>
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/upload">Upload Your Work</Link></li>
              <li><Link className="nav-link" to="/market">Wisdom Market</Link></li>
              <li><Link className="nav-link" to="/register">Register</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default Header;