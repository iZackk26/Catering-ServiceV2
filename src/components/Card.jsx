import React from 'react'
import { Card} from 'flowbite-react'



function CardPackages({ imageUrl, imageAlt, title, description }) {
  return (
    <Card className="max-w-sm w-full lg:max-w-full lg:flex border-none">
      <img src={imageUrl} alt={imageAlt} width={350} height={350} className="w-full h-auto object-cover rounded-lg" />
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
          {title}
        </h5>
        <p className="font-normal text-black dark:text-gray-400">
          {description}
        </p>
      </div>
    </Card>
  );
}


export default CardPackages;
