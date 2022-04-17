import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='bg-light mt-5'>
            <div className="container">
                <footer className='py-3 my 4'>
                        <div className='text-center mt-4'>
                            <img src={logo} alt="" />
                        </div>
                    <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                        <li className='nav-item me-3'>
                            <Link to='/' className='text-muted'>Home</Link>
                        </li>
                        <li className='nav-item me-3'>
                            <Link to='/services' className='text-muted'>Services</Link>
                        </li>
                        <li className='nav-item me-3'>
                            <Link to='/blog' className='text-muted'>Blog</Link>
                        </li>
                        <li className='nav-item me-3'>
                            <Link to='/login' className='text-muted'>Login</Link>
                        </li>
                        <li className='nav-item me-3'>
                            <Link to='/signUP' className='text-muted'>Sign UP</Link>
                        </li>
                    </ul>
                    <p className='text-center text-muted'>© 2021</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;