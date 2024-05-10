import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react'
import Rating from './Rating';
import MiniDish from './MiniDish';


function CardPackages({ imageUrl, imageAlt, title, description, stars, miniDishes, id }) {
  return (
    <Link to={`/packages/${id}`} className="no-underline">
      <Card className="max-w-sm w-full lg:max-w-full lg:flex border-none" data-aos="fade-up">
        <img src={imageUrl} alt={imageAlt} width={350} height={350} className="w-full h-auto object-cover rounded-lg" />
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-900 font-bold text-xl flex-1">
              {title}
            </h2>
            <div className="flex-1 flex justify-end">
              <Rating stars={stars} />
            </div>
          </div>
          {miniDishes && (
            <div className='flex flex-wrap'>
              {miniDishes.map((dishImg, index) => (
                <MiniDish key={index} img={dishImg} />
              ))}
            </div>
          )}
          <p className="font-normal text-black dark:text-gray-400">
            {description}
          </p>
        </div>
      </Card>
    </Link>
  );
}


export default CardPackages;
