import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextInput, Textarea } from "flowbite-react";
// Components
import Header from '../components/Header';

import DeveloperCard from '../components/contact/DeveloperCard';
import Footer from '../components/Footer';


export default function Contact() {
  const developers = [
    {
      username: 'JosueMatamoros',
      avatarUrl: 'https://avatars.githubusercontent.com/u/129631744?v=4',
      gitHubUrl: 'https://github.com/JosueMatamoros'
    },
    {
      username: 'iZackk26',
      avatarUrl: 'https://avatars.githubusercontent.com/u/128321469?v=4',
      gitHubUrl: 'https://github.com/iZackk26'
    },
    {
      username: 'hectorcaravacavargas',
      avatarUrl: 'https://avatars.githubusercontent.com/u/130873406?v=4',
      gitHubUrl: 'https://github.com/hectorcaravacavargas'
    }
  ];

  return (
    <>
      <Header />

      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">Contacto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Envíanos un mensaje</h2>
            <TextInput
              id="name"
              type="text"
              placeholder="Tu nombre"
              required={true}
              shadow={true}
            />
            <TextInput
              id="email"
              type="email"
              placeholder="Tu correo electrónico"
              required={true}
              shadow={true}
            />
            <Textarea
              id="message"
              placeholder="Tu mensaje"
              required={true}
              rows={6}
              shadow={true}
            />
            <Button gradientDuoTone="greenToBlue">Enviar Mensaje</Button>
          </div>
          <div className="space-y-4 ml-2 mt-4">
            <h2 className="text-xl font-semibold">O contáctanos directamente</h2>
            <p>Puedes llamarnos al: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+911</a></p>
            <p>O envíanos un correo: <a href="mailto:contacto@catering.com" className="text-blue-600 hover:underline">RoyalCatering@catering.com</a></p>
            <Link to="/catering">
              <Button gradientDuoTone="purpleToBlue">Ver Servicios</Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
