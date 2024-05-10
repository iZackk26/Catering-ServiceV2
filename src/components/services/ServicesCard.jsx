import React from 'react';
import { Card } from 'flowbite-react';

const ServiceCard = ({ title, description, features }) => {
  return (
    <Card className="flex flex-col h-full border border-gray-200 rounded-lg shadow-md max-w-sm" data-aos="zoom-in">
      <div className="p-5 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-700 text-center">{title}</h1>
      </div>
      <div className="flex-1 p-5">
        <p className="font-normal text-gray-700">{description}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ServiceCard;
