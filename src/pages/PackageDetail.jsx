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
    return (
      <div role="status" className="space-y-8  flex flex-col items-center animate-pulse mt-16 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
          </svg>
        </div>
        <div className="w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
      <span className="sr-only">Loading...</span>
      </div>
    );
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
              <p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 ml-4 mb-3'><b>{selectedDish.descripcion}</b></p>
              <span className="bg-blue-100 text-blue-800 text-m  font-medium px-4 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-4 mt-10">${selectedDish.precio}</span>

              
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
