import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import FAQ from '../components/FAQ';

import Image from '../assets/About/chef.webp';


const AboutUs = () => {
  return (
    <>
    <Header />
    
    <div className="container mx-auto px-4">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={Image} alt="Catering Service" className="rounded-lg shadow-lg" />
        </div>
        <div>
        <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
          <li class="mb-10 ms-6">            
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </span>
                <h2 className="text-3xl font-semibold mb-3">Who We Are</h2>
                <p>At Catering Service Pinguin, we don’t just serve food, we create connections. We are a young and dynamic catering and entertainment company that specializes in bringing people together with high-quality, reliable services. Founded just three months ago, in February 2024, our mission is centered on excellence and customer satisfaction.</p>
          </li>
          <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>

              </span>
                <h3 className="text-2xl font-semibold mt-4 mb-2">Our Values</h3>
                <p>Commitment, discipline, respect, responsibility, and transparency are not just words to us; they are the pillars on which every service we offer is built. These values drive us to continuously improve and maintain an exceptional service standard.</p>
          </li>
          <li class="ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </span>
                <h3 className="text-2xl font-semibold mt-4 mb-2">Our History</h3>
                <p>It all started with a software requirements project at the university, an idea that quickly transformed into an innovative business. Since then, we have constantly evolved, adapting our interface and operations to offer an unparalleled experience to our clients and partners.</p>
          </li>
          <li class="ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </span>
                <h3 className="text-2xl font-semibold mt-4 mb-2">Our Mision</h3>
                <p>Our app is dedicated to connecting individuals seeking catering services with providers who offer top-notch catering solutions. We offer a platform where users can explore a variety of catering packages, engage services, and choose specific dishes tailored to their events. Our target audience includes individuals aged between 20 to 50 who are looking to organize events that require professional catering services. We stand by our commitment to offering guarantees and upholding values of commitment, discipline, respect, responsibility, and transparency in every interaction.</p>
          </li>
          <li class="ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </span>
                <h3 className="text-2xl font-semibold mt-4 mb-2">Our Vision</h3>
                <p>We aspire to be the leading company in the catering service industry, distinguished by the quality and reliability of our services. Our vision is for our clients to have exceptional, memorable experiences at their events, facilitated by the services they book through our platform. We aim to continuously improve the quality of our service and the design of our app, ensuring it meets the evolving needs of our users. Ultimately, we wish to be remembered as a company that played a pivotal role in creating cherished experiences for individuals and their loved ones.</p>
          </li>
       </ol>
        </div>
      </div>

      <div className="text-center my-10">
        <FAQ />
      </div>

    </div>
    
    <Footer /></>
  );
}

export default AboutUs;
