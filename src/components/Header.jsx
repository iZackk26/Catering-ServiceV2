import React from 'react'

// Components
import { Navbar } from './Navabar'


// Assets
import logo from '../assets/logo.jpg'



export default function Header() {
  return (
    <header> 
      <div className={`top-0 w-full h-full z-10 flex flex-col justify-between`}>
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center ">
            <div className="mr-4">
              <img src={logo} alt="Logo" className="h-8" />
            </div>
            <h1 className="text-3xl">ROYAL CATERING</h1>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
