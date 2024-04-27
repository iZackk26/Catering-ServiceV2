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

// MiniDishes Meat
import Chorizo from '../assets/Packages/Meat/grill-chorizo.webp';
import AngusRibeye from '../assets/Packages/Meat/angus-ribeye.webp';
import ChickenCordonBleu from '../assets/Packages/Meat/ChickenCordonBleu.webp';
import ChickenCurry from '../assets/Packages/Meat/chickenCurry.webp';
import ChickenSalad from '../assets/Packages/Meat/ChickenSalad.webp';
import ChickenTikkaMasalaWithPotatoes from '../assets/Packages/Meat/MalasaPotatoes.webp';
import FiletMignon from '../assets/Packages/Meat/filet-mignon.webp';
import GrillChorizo from '../assets/Packages/Meat/grill-chorizo.webp';
import GrillDuck from '../assets/Packages/Meat/grill-duck.webp';
import GrillLobster from '../assets/Packages/Meat/grill-lobster.webp';
import GrillOctopus from '../assets/Packages/Meat/grill-octopus.webp';
import GrillPork from '../assets/Packages/Meat/grill-pork.webp';
import GrillSausage from '../assets/Packages/Meat/grill-sausage.webp';
import GrilledLambChops from '../assets/Packages/Meat/grilled-lamb-chops.webp';
import HerbRoastedChicken from '../assets/Packages/Meat/HerbChicken.webp';
import MeatWall from '../assets/Packages/Meat/meat-wall.webp';
import Meat from '../assets/Packages/Meat/meat.webp';
import Meat2 from '../assets/Packages/Meat/meat2.webp';
import Meat3 from '../assets/Packages/Meat/meat3.webp';
import Mushroom from '../assets/Packages/Meat/mushroom.webp';


// Vegetarian
import Veggie from '../assets/Packages/Vegetarian/vegetarian2.webp';
import GreenGastronomy from '../assets/Packages/Vegetarian/vegetarian.webp';
import GardenDelights from '../assets/Packages/Vegetarian/vegetarian3.webp';

// MiniDishes Vegetarian
import Capresse from '../assets/Packages/Vegetarian/capresse.webp';
import CoconutCurry from '../assets/Packages/Vegetarian/coconut-curry.webp';
import CreamyMushrooms from '../assets/Packages/Vegetarian/creamy-mushrooms.webp';
import CreamyTomatoe from '../assets/Packages/Vegetarian/creamy-tomatoe.webp';
import FalafelSalad from '../assets/Packages/Vegetarian/falafel-salad.webp';
import MediterraneanSalad from '../assets/Packages/Vegetarian/mediterranean-salad.webp';
import RainbowQuinoa from '../assets/Packages/Vegetarian/rainbow-quinoa.webp';
import RoastedBeet from '../assets/Packages/Vegetarian/roasted-beet.webp';
import RoastedButternut from '../assets/Packages/Vegetarian/roasted-butternut.webp';
import SpicyBlackBean from '../assets/Packages/Vegetarian/spicy-black-bean.webp';
import TropicalSalad from '../assets/Packages/Vegetarian/tropical-salad.webp';
import VegetableMinestrone from '../assets/Packages/Vegetarian/vegetable-minestrone.webp';
import Hamburguer from '../assets/Packages/Vegetarian/hamburger.webp';
import Pizza from '../assets/Packages/Vegetarian/pizza.webp';
import TacosVege from '../assets/Packages/Vegetarian/tacos.webp';
import PanPita from '../assets/Packages/Vegetarian/PanPita.webp';
import Wrap from '../assets/Packages/Vegetarian/WrapVege.webp';
import Garbanzos from '../assets/Packages/Vegetarian/Garbanzos.webp';


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
      miniDishes: [GrilledLobster, ShrimPineappleSkewers, Ceviche, Salmon, Paella, Tacos]
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
      miniDishes: [FiletMignon, GrillLobster, AngusRibeye]

    },
    {
      imageUrl: Tour,
      imageAlt: "Meat2",
      title: "Global Tour",
      description: "Embark on a culinary journey with meats from around the world. An unforgettable taste adventure awaits.",
      stars: 3,
      miniDishes: [ChickenCordonBleu, ChickenTikkaMasalaWithPotatoes, Mushroom, ChickenCurry, HerbRoastedChicken]

    },
    {
      imageUrl: Grill,
      imageAlt: "Meat3",
      title: "Grill Party",
      description: "The ultimate selection for grill enthusiasts. Elevate your next barbecue experience with the finest meats and sides.",
      stars: 4,
      miniDishes: [GrillOctopus, GrillDuck, GrillLobster, GrillChorizo, GrillPork, GrillSausage]
    },
    {
      imageUrl: Veggie,
      imageAlt: "Vegetarian",
      title: "Global Veggie Soups Green Gastronomy",
      description: "Offers a curated selection of flavorful international vegetarian soups. Ideal for any event seeking delicious, healthy options.",
      stars: 1,
      miniDishes: [CreamyTomatoe, RoastedButternut, VegetableMinestrone, CoconutCurry, CreamyMushrooms, SpicyBlackBean] 
    },
    {
      imageUrl: GreenGastronomy,
      imageAlt: "Vegetarian2",
      title: "Green Gastronomy",
      description: "Explore the richness and diversity of vegetarian cuisine with this eclectic package. From comforting dishes to exotic flavors, this menu has it all.",
      stars: 3,
      miniDishes: [MediterraneanSalad, RainbowQuinoa, RoastedBeet, FalafelSalad, TropicalSalad, Capresse]
    },
    {
      imageUrl: GardenDelights,
      imageAlt: "Vegetarian3",
      title: "Garden Delights",
      description: "Enjoy a garden-inspired culinary experience with this irresistible package. Each dish is bursting with freshness and flavor, ensuring a memorable meal.",
      stars: 4,
      miniDishes: [TacosVege, Pizza, Hamburguer, PanPita, Wrap, Garbanzos]
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
    <div className='px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {cardsData.map((card, index) => (
        <CardPackages key={index} {...card} />
      ))}
    </div>
    </>
  )
}
