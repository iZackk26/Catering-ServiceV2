import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
        <ul className="flex justify-around list-none m-0 p-0">
          <li className="mx-2">
            <Link to="/" className="hover:text-blue-300">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/services" className="hover:text-blue-300">Services</Link>
          </li>
          <li className="mx-2">
            <Link to="/packages" className="hover:text-blue-300">Packages</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          </li>
        </ul>
        
      </nav>
    )
}

