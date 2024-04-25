import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';


function Header() {
    return (
        <header className="bg-black fixed w-full top-0 left-0">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
                <img src={logo} alt="Logo" className="h-8" />
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/" className="text-white hover:text-blue-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-white hover:text-blue-300">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
