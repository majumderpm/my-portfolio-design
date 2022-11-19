import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/icon.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='nav_header'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-light bg-color">
                    <div className="logo">
                        <p className='logo-text'>  <img src={logo} alt="" />inbio</p>
                    </div>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link active'>home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'>about</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-link'>services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/expriences' className='nav-link'>expriences</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link'>contact</Link>
                        </li>
                    </ul>
                    <button class="btn btn-sm btn-secondary mybtn" type="button">Download CV</button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;