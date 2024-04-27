import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-10">
      <div className="w-full mx-auto px-0 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="flex items-center mb-4 md:mb-0">
            <img src={logo} className="h-8 w-8 rounded-full" alt="iZack Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">Catering-Service</span>
          </Link>
          <ul className="flex flex-wrap justify-center items-center mb-4 md:mb-0 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <Link to="/about" className="hover:underline mr-4 md:mr-6">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline px-2">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div className="text-center">
            <span className="block text-sm text-gray-500 dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Catering Services™</Link>. All Rights Reserved.</span>
            <span className="block text-sm text-gray-500 dark:text-gray-400"><Link to="/development" className="hover:underline">Still in development</Link></span>
        </div>
      </div>
    </footer>
  )
}
