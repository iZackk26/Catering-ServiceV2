import React from 'react'
import './MiniDish.css';

export default function MiniDish({ img }) {
  return (
    <div className='mr-2 h-10 w-10 rounded-full mb-3 shadow-xl'>
      <img src={img} alt="Icon" className='rounded-full shadow-lg miniDish-img'/>
    </div>
  )
}
