import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import PackageItem from "../components/packages/PackageItem";
import { Link } from "react-router-dom";

// Import images for packages
// seafood
import Lobster from '../assets/Packages/Seafood/sea-food.webp';
import Sushi from '../assets/Packages/Seafood/sea-food2.webp';
import Fish from '../assets/Packages/Seafood/sea-food3.webp';

// meat
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

const Book = () => {
  const [customOption, setCustomOption] = useState(false);
  const [selectedCatering, setSelectedCatering] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);

  const cateringOptions = {
    "Gourmet Delight": ["GrilledLobster", "ShrimPineappleSkewers", "Ceviche", "Salmon", "Paella", "Tacos", "Nigiri", "Okonomiyaki", "FishDonburi", "Udon", "Sashimi", "Tempura", "BakedSalmon", "GoldenCrispyTilapia", "SavaloSupreme", "MachacaWithEggs", "Seasame", "GrilledFishFillet"],
    "Street Meat Food": ["FiletMignon", "GrillLobster", "AngusRibeye", "Bistec", "Wagyu", "Tomahawk", "ChickenCordonBleu", "ChickenTikkaMasalaWithPotatoes", "Mushroom", "ChickenCurry", "HerbRoastedChicken", "Suiza", "GrillOctopus", "GrillDuck", "GrillLobster", "GrillChorizo", "GrillPork", "GrillSausage"],
    "Vegetarian Feast": ["CreamyTomatoe", "RoastedButternut", "VegetableMinestrone", "CoconutCurry", "CreamyMushrooms", "SpicyBlackBean", "MediterraneanSalad", "RainbowQuinoa", "RoastedBeet", "FalafelSalad", "TropicalSalad", "Capresse", "TacosVege", "Pizza", "Hamburguer", "PanPita", "Wrap", "Garbanzos"],
    "Classic Catering": ["CaribbeanRiceBeans", "CaribbeanCocadas", "CaribbeanChicken", "CaribbeanPanBon", "CaribbeanPatacones", "CaribbeanPatty", "Pinto", "Pinto2", "Casado", "Omelet", "Pancakes", "Platano", "PanSobado", "PanRosquillas", "PanCornbread", "PanBraided", "PanSweetBread", "PanChiverre"]
  };

  const handleCateringChange = (e) => {
    setSelectedCatering(e.target.value);
    setSelectedDishes([]); // Clear selected dishes when changing catering
  };

  const handleDishSelect = (dish) => {
    if (!selectedDishes.includes(dish)) {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const handleDishRemove = (dishToRemove) => {
    setSelectedDishes(selectedDishes.filter(dish => dish !== dishToRemove));
  };

  const toggleCustomOption = () => {
    setCustomOption(!customOption);
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleSendRequest = (event) => {
    event.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      window.location.href = '/';
    }, 5000);
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="p-4 border border-gray-300 shadow-lg bg-white rounded-lg w-full max-w-screen-lg flex flex-col">
        {/* Contact Information */}
        <div className="mb-4">
          <Label htmlFor="name" value="Name" />
          <TextInput id="name" type="text" placeholder="Catering Name" required />
        </div>
        <div className="flex justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <Label htmlFor="email" value="Your email" />
            <TextInput id="email" type="email" icon={HiMail} placeholder="name@gmail.com" required />
          </div>
          <div className="flex-1 min-w-0">
            <Label htmlFor="phone" value="Phone number" />
            <TextInput id="phone" type="tel" icon={FaPhoneAlt} placeholder="(506) 8989-3434" required />
          </div>
        </div>
         {/* Cantidad de personas */}
          <div className="mb-6">
            <Label htmlFor="people" value="Quantity of person"/>
            <TextInput id="people" type="number" placeholder="10" required />
          </div>  

        {/* Package List Always Visible */}
        <div className="mb-4">
          <PackageItem name="Fresh Ocean" imageSrc={Lobster} />
          <PackageItem name="Sea Delights" imageSrc={Sushi} />
          <PackageItem name="Fisherman's Feast" imageSrc={Fish} />
          <PackageItem name="Luxury Classics" imageSrc={LuxuryClassics} />
          <PackageItem name="Global Tour" imageSrc={Tour} />
          <PackageItem name="Grill Party" imageSrc={Grill} />
          <PackageItem name="Veggie Soups" imageSrc={Veggie} />
          <PackageItem name="Green Gastronomy" imageSrc={GreenGastronomy} />
          <PackageItem name="Garden Delights" imageSrc={GardenDelights} />
          <PackageItem name="Caribbean Flavors" imageSrc={Caribbean} />
          <PackageItem name="Sunrise Tico" imageSrc={SunriseTico} />
          <PackageItem name="Bread Rama" imageSrc={BreadRama} />
        </div>

        {/* Button to Toggle Custom Option */}
        <button onClick={toggleCustomOption} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {customOption ? "View Default Packages" : "Choose Custom Option"}
        </button>

        {/* Custom Catering Options */}
        {customOption && (
          <div>
            <div className="mb-4">
              <Label htmlFor="catering-dropdown" value="Select Catering" />
              <select id="catering-dropdown" className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={handleCateringChange} value={selectedCatering}>
                <option value="">Select a catering service</option>
                {Object.keys(cateringOptions).map((catering) => (
                  <option key={catering} value={catering}>{catering}</option>
                ))}
              </select>
            </div>
            {selectedCatering && (
              <div className="mb-4">
                <Label value="Select Dishes" />
                <div className="flex flex-wrap gap-2">
                  {cateringOptions[selectedCatering].map((dish) => (
                    <button key={dish} onClick={() => handleDishSelect(dish)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      {dish}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {selectedDishes.length > 0 && (
              <div>
                <Label value="Selected Dishes" />
                <ul className="list-disc pl-5">
                  {selectedDishes.map((dish) => (
                    <li key={dish} className="flex justify-between items-center">
                      {dish}
                      <button onClick={() => handleDishRemove(dish)} className="text-red-500 hover:text-red-700 ml-2">Remove</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {/* Send button */}
        <Link to="/" className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded self-end">
          <button
              onClick={handleSendRequest}
            >
            Send Catering Request
          </button>
        </Link>
        {showAlert && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white shadow-lg rounded-lg">
            <p>Your order has been confirmed,</p>
            <p>thank you very much for choosing us,</p>
            <p>have a great day.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
