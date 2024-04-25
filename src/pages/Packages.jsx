import React from 'react'

// Components
import Header from '../components/Header'
import CardPackages from '../components/Card';

import Lobster from '../assets/Packages/Seafood/sea-food.webp';
import Sushi from '../assets/Packages/Seafood/sea-food2.webp';
import Fish from '../assets/Packages/Seafood/sea-food3.webp';


export default function Packages() {
  const cardsData = [
    {
      imageUrl: Lobster,
      imageAlt: "Lobsters and crabs",
      title: "Fresh Ocean",
      description: "Experience the freshness of the sea with our premium selection, featuring a variety of seafood dishes designed for the ultimate ocean flavor experience",
      stars: 4
    },
    {
      imageUrl: Sushi,
      imageAlt: "Lobsters and crabs",
      title: "Sea Delights",
      description: "Delve into exquisite Japanese flavors with our carefully curated sushi package, offering a blend of traditional and contemporary sushi and sashimi."
    },
    {
      imageUrl: Fish,
      imageAlt: "Lobsters and crabs",
      title: "Fisherman's Feast",
      description: "Savor the heartiness of classic seafood with our 'Fisherman's Feast,' a collection of comforting and flavorful dishes straight from the fisherman's net."
    },
    
  ]

  return (
    <>
    <Header />
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {cardsData.map((card, index) => (
        <CardPackages key={index} {...card} />
      ))}
    </div>
    </>
  )
}
