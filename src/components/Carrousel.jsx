import React from 'react';
import { Carousel } from 'flowbite-react';
import img1 from '../assets/Carousel/meat-food.png'
import img2 from '../assets/Carousel/seafood-food.png'
import img3 from '../assets/Carousel/traditional-food.jpg'

function Carousel_Home() {
  return (
    <div className="relative mt-16 w-full h-screen">
      {/* Carrusel */}
      <Carousel>
        <img src={img1} alt="Carne" className="w-full h-full object-cover" />
        <img src={img2} alt="Mariscos" className="w-full h-full object-cover" />
        <img src={img3} alt="Comida tradicional" className="w-full h-full object-cover" />
      </Carousel>
    </div>
  );
}

export default Carousel_Home;
