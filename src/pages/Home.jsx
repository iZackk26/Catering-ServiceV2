import React from 'react'
import { useState } from 'react'
import Base from '../App';
import Carousel_Home from '../components/Carrousel/Carrousel';


function Home() {
  return (
    <Base>
      <div>
        <Carousel_Home />
      </div>
    </Base>
    
  )

}

export default Home;