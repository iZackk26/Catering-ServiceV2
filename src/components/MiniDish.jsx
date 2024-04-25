import React from 'react'

export default function MiniDish({ img }) {
  return (
    <div className='mr-2 h-10 w-10 rounded-full mb-3 shadow-xl'>
      <img src={img} alt="Icon" className='rounded-full shadow-lg'/>
    </div>
  )
}
