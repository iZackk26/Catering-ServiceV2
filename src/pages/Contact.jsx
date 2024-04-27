import React from 'react';
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
      <div className="container mx-auto mt-5 px-4">
        <h2 className="text-center mb-4">Contact Our Developers</h2>
        <div className="flex justify-around flex-nowrap items-center gap-4">
          {developers.map(dev => (
            <DeveloperCard key={dev.username} {...dev} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
