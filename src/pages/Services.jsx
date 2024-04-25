import React from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/services/ServicesCard';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Catering Service',
      description: 'Offering bespoke catering for any event, we ensure a remarkable dining experience with our skilled team and customized menus.',
      features: ['Conferences', 'Birthdays', 'Anniversaries', 'Executive Lunches', 'Corporate Events', 'Graduations', 'Weddings'],
    },
    {
      id: 2,
      title: 'Institutional Dining',
      description: 'Providing nutritious, flavorful dining options tailored for institutions. Our menus are crafted to meet diverse dietary preferences.',
      features: ['Cafeteria management', 'Business menus', 'Executive Chef', 'Nutritionist', 'Custom menus in five-week cycles'],
    },
    {
      id: 3,
      title: 'Complementary Services',
      description: 'Enhance your event with our comprehensive support services. From elegant decor to lively entertainment, we manage every detail.',
      features: ['Table and chair rental', 'Linens and decoration', 'Music and entertainment', 'Comprehensive event consulting'],
    }
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto mt-5">
        <h1 className="text-center text-3xl font-bold my-5">Our Services</h1>
        <p className="text-center text-lg mb-6">
          Explore our wide range of services designed to help you achieve your goals. Each service is tailored to meet your specific needs.
        </p>
        <div className="flex flex-wrap justify-evenly gap-4">
          {services.map((service) => (
            <div className="flex flex-grow" key={service.id}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
