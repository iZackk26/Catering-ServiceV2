import React, { useState } from "react";
import { Dropdown, Label, TextInput, FileInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const CateringForm = () => {
  const [selectedCatering, setSelectedCatering] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);

  const cateringOptions = {
    "Gourmet Delight": ["Salmon En Croûte", "Truffle Risotto", "Roast Lamb", "Vegan Lasagna", "Chocolate Fondue", "Panna Cotta"],
    "Classic Catering": ["Fried Chicken", "Beef Stroganoff", "Fish and Chips", "Vegetable Stir Fry", "Apple Pie", "Cheesecake"],
    "Vegetarian Feast": ["Vegetable Paella", "Tofu Salad", "Mushroom Burger", "Spinach Quiche", "Carrot Cake", "Fruit Tart"],
    "Street Food Favs": ["Tacos", "Empanadas", "Falafel Wrap", "Hot Dogs", "Doughnuts", "Ice Cream Sandwich"]
  };

  const handleCateringChange = (e) => {
    setSelectedCatering(e.target.value);
    setSelectedDishes([]); // Limpiar los platos seleccionados al cambiar el catering
  };

  const handleDishSelect = (dish) => {
    if (!selectedDishes.includes(dish)) {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const handleDishRemove = (dishToRemove) => {
    setSelectedDishes(selectedDishes.filter(dish => dish !== dishToRemove));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="p-4 border border-gray-300 shadow-lg bg-white rounded-lg">
        {/*Name */}
        <div className="mb-4">
            <Label htmlFor="name" value="Name" />
            <TextInput id="name" type="text" placeholder="Catering Name" required />
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex-1 min-w-0">
              <Label htmlFor="email" value="Your email" />
              <TextInput
                id="email"
                type="email"
                icon={HiMail}
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="flex-1 min-w-0">
              <Label htmlFor="phone" value="Phone number" />
              <TextInput
                id="phone"
                type="tel"
                icon={FaPhoneAlt}
                placeholder="(506) 8989-3434"
                required
              />
            </div>
          </div>

          {/* Cantidad de personas */}
          <div className="my-4">
            <Label htmlFor="people" value="Quantity of person"/>
            <TextInput id="people" type="number" placeholder="10" required />
          </div>  
          
        <div className="max-w-md mx-auto">
          {/* Catering Dropdown */}
          <div className="mb-4">
            <Label htmlFor="catering-dropdown" value="Select Catering" />
            <select id="catering-dropdown" className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={handleCateringChange} value={selectedCatering}>
              <option value="">Select a catering service</option>
              {Object.keys(cateringOptions).map((catering) => (
                <option key={catering} value={catering}>{catering}</option>
              ))}
            </select>
          </div>

          {/* Dish Selection Buttons */}
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

          {/* Selected Dishes List */}
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
      </div>
    </div>
  );
};

export default CateringForm;
