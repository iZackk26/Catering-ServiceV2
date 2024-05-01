import React from 'react';
import { Button } from 'flowbite-react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import FAQ from '../components/FAQ';

import Logo from '../assets/logo.jpg';


const AboutUs = () => {
  return (
    <>
    <Header />
    
    <div className="container mx-auto px-4">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div>
          <img src={Logo} alt="Catering Service" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-3">Who We Are</h2>
          <p>At Catering Service Pinguin, we don’t just serve food, we create connections. We are a young and dynamic catering and entertainment company that specializes in bringing people together with high-quality, reliable services. Founded just three months ago, in February 2024, our mission is centered on excellence and customer satisfaction.</p>
          <h3 className="text-2xl font-semibold mt-4 mb-2">Our Values</h3>
          <ul className="list-disc pl-5">
            <p>Commitment, discipline, respect, responsibility, and transparency are not just words to us; they are the pillars on which every service we offer is built. These values drive us to continuously improve and maintain an exceptional service standard.</p>
          </ul>
          <h3 className="text-2xl font-semibold mt-4 mb-2">Our History</h3>
          <ul className="list-disc pl-5">
            <p>It all started with a software requirements project at the university, an idea that quickly transformed into an innovative business. Since then, we have constantly evolved, adapting our interface and operations to offer an unparalleled experience to our clients and partners.</p>
          </ul>
        </div>
      </div>
      <div className="text-center my-10">
        <h3 className="text-4xl font-bold mt-4 mb-2">Our Team</h3>
        <p> Maybe include developer cards</p>
      </div>
      <div className="text-center my-10">
        <FAQ />
      </div>

    </div>
    
    <Footer /></>
  );
}

export default AboutUs;
