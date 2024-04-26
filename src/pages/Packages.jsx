import React from 'react'

// Components
import Header from '../components/Header'
import CardPackages from '../components/Card';

// Seafood
import Lobster from '../assets/Packages/Seafood/sea-food.webp';
import Sushi from '../assets/Packages/Seafood/sea-food2.webp';
import Fish from '../assets/Packages/Seafood/sea-food3.webp';

// MiniDishes
import BakedSalmon from '../assets/Packages/Seafood/Baked-Salmon.webp';
import Ceviche from '../assets/Packages/Seafood/ceviche.webp';
import FishDonburi from '../assets/Packages/Seafood/fish-donburi.webp';
import GoldenCrispyTilapia from '../assets/Packages/Seafood/Tilapia-Golden.webp';
import GrilledFishFillet from '../assets/Packages/Seafood/GrilledFishFillet.webp';
import GrilledLobster from '../assets/Packages/Seafood/grilled-lobster.webp';
import JapaneseDelights from '../assets/Packages/Seafood/japanesedelights.webp';
import LeFestin from '../assets/Packages/Seafood/le-festin.webp';
import MachacaWithEggs from '../assets/Packages/Seafood/Machaca with Eggs.webp';
import Main from '../assets/Packages/Seafood/Main.webp';
import Nigiri from '../assets/Packages/Seafood/nigiri.webp';
import Okonomiyaki from '../assets/Packages/Seafood/okonomiyaki.webp';
import Paella from '../assets/Packages/Seafood/paella.webp';
import Salmon from '../assets/Packages/Seafood/salmon.webp';
import Sashimi from '../assets/Packages/Seafood/sashimi.webp';
import SavaloSupreme from '../assets/Packages/Seafood/savalo-supreme.webp';
import Seasame from '../assets/Packages/Seafood/seasame.webp';
import ShrimPineappleSkewers from '../assets/Packages/Seafood/shrim-pineapple-skewers.webp';
import Tacos from '../assets/Packages/Seafood/tacos.webp';
import Tempura from '../assets/Packages/Seafood/tempura.webp';
import Udon from '../assets/Packages/Seafood/udon.webp';

// Meat
import LuxuryClassics from '../assets/Packages/Meat/meat.webp';
import Tour from '../assets/Packages/Meat/meat2.webp';
import Grill from '../assets/Packages/Meat/meat3.webp';

// Vegetarian
import Veggie from '../assets/Packages/Vegetarian/vegetarian2.webp';
import GreenGastronomy from '../assets/Packages/Vegetarian/vegetarian.webp';
import GardenDelights from '../assets/Packages/Vegetarian/vegetarian3.webp';

// Traditional
import Caribbean from '../assets/Packages/Traditional/traditional.webp';
import SunriseTico from '../assets/Packages/Traditional/traditional2.webp';
import BreadRama from '../assets/Packages/Traditional/traditional3.webp';

export default function Packages() {
  const cardsData = [
    {
      imageUrl: Lobster,
      imageAlt: "Lobsters and crabs",
      title: "Fresh Ocean",
      description: "Experience the freshness of the sea with our premium selection, featuring a variety of seafood dishes designed for the ultimate ocean flavor experience",
      stars: 4,
      miniDishes: [GrilledLobster, ShrimPineappleSkewers, Ceviche, Salmon, Paella, Tacos ]
    },
    {
      imageUrl: Sushi,
      imageAlt: "Lobsters and crabs",
      title: "Sea Delights",
      description: "Delve into exquisite Japanese flavors with our carefully curated sushi package, offering a blend of traditional and contemporary sushi and sashimi.",
      stars: 4,
      miniDishes: [Nigiri, Okonomiyaki, FishDonburi, Udon, Sashimi, Tempura]
    },
    {
      imageUrl: Fish,
      imageAlt: "Lobsters and crabs",
      title: "Fisherman's Feast",
      description: "Savor the heartiness of classic seafood with our 'Fisherman's Feast,' a collection of comforting and flavorful dishes straight from the fisherman's net.",
      stars: 3,
      miniDishes: [BakedSalmon, GoldenCrispyTilapia, SavaloSupreme, MachacaWithEggs, Seasame, GrilledFishFillet]
    },
    {
      imageUrl: LuxuryClassics,
      imageAlt: "Meat1",
      title: "Luxury Classics",
      description: "A premium selection for connoisseurs of the finest meats. Relish the unparalleled quality with every bite.",
      stars: 5,
      miniDishes: [Lobster, Sushi, Fish]

    },
    {
      imageUrl: Tour,
      imageAlt: "Meat2",
      title: "Global Tour",
      description: "Embark on a culinary journey with meats from around the world. An unforgettable taste adventure awaits.",
      stars: 3

    },
    {
      imageUrl: Grill,
      imageAlt: "Meat3",
      title: "Grill Party",
      description: "The ultimate selection for grill enthusiasts. Elevate your next barbecue experience with the finest meats and sides.",
      stars: 4
    },
    {
      imageUrl: Veggie,
      imageAlt: "Vegetarian",
      title: "Global Veggie Soups Green Gastronomy",
      description: "Offers a curated selection of flavorful international vegetarian soups. Ideal for any event seeking delicious, healthy options.",
      stars: 1
    },
    {
      imageUrl: GreenGastronomy,
      imageAlt: "Vegetarian2",
      title: "Green Gastronomy",
      description: "Explore the richness and diversity of vegetarian cuisine with this eclectic package. From comforting dishes to exotic flavors, this menu has it all.",
      stars: 3
    },
    {
      imageUrl: GardenDelights,
      imageAlt: "Vegetarian3",
      title: "Garden Delights",
      description: "Enjoy a garden-inspired culinary experience with this irresistible package. Each dish is bursting with freshness and flavor, ensuring a memorable meal.",
      stars: 4
    },
    {
      imageUrl: Caribbean,
      imageAlt: "Traditional",
      title: "Caribbean Flavors",
      description: "Experience the vibrant and bold flavors of the Caribbean with this package. Each dish is a celebration of the region's rich culinary heritage.",
      stars: 4
    },
    {
      imageUrl: SunriseTico,
      imageAlt: "Traditional2",
      title: "Sunrise Tico",
      description: "A breakfast that combines the rich flavors of traditional gallo pinto, sweet plantains, and aromatic coffee.",
      stars: 5
    },
    {
      imageUrl: BreadRama,
      imageAlt: "Traditional3",
      title: "Bread Rama",
      description: "An exclusive selection of traditional Costa Rican breads, each with its own unique history and flavor.",
      stars: 3
    }
    
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
