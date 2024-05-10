import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfiniteScroll from 'react-infinite-scroll-component';

import Ceviche from '../assets/Packages/Seafood/ceviche.webp';


function PackageDetails() {
  const { id } = useParams();
  const [selectedDish, setSelectedDish] = useState(null);
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/dishes/packages/${id}`)
      .then(response => response.json())
      .then(data => setPackageDetails(data))
      .catch(error => console.error('Error fetching package details:', error));
  }, [id]);


  if (!packageDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      
      <div className="flex h-screen mt-10" data-aos="zoom-in" data-aos-duration="1250">
        <div className="w-1/4 flex flex-col overflow-y-auto hide-scrollbar justify-start items-center p-4 space-y-4">
          {packageDetails.platillos.map(platillo => (
            <img 
              key={platillo.nombre}
              src={platillo.image || {Ceviche}} // Use a default image if none is provided
              className="w-1/2 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-125"
              alt={platillo.nombre}
              onClick={() => setSelectedDish(platillo)}
            />
          ))}
        </div>
        <div className="w-3/4 flex justify-center items-start p-4 pt-20 text-black">
          {selectedDish ? (
            <div>
              <h3 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-4 pt-14 pl-10"> text-black'>{selectedDish.nombre}</h3>
              <p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 ml-4'><b>{selectedDish.descripcion}</b></p>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-4">${selectedDish.precio}</span>
              
            </div>
          ) : (
            <p className="text-black text-2xl font-bold flex flex-row gap-x-4 pb-5">Selecciona un plato para ver detalles.</p>
            
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PackageDetails;
