import React, { useState, useEffect } from "react";
import { Label, TextInput, FileInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const CateringForm = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Agrega el primer paquete al inicializar el componente
    addPackage();
  }, []);

  const addPackage = () => {
    const newPackage = {
      id: packages.length,
      name: "",
      dishes: [],
    };
    setPackages([...packages, newPackage]);
  };

  const addDishToPackage = (packageIndex) => {
    const newDish = {
      id: packages[packageIndex].dishes.length,
      name: "",
      file: null,
    };
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].dishes.push(newDish);
    setPackages(updatedPackages);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="p-4 border border-gray-300 shadow-lg bg-white rounded-lg">
        <div className="max-w-md mx-auto">
          {/* Name, Email, and Phone fields */}
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

          {/* Logo Upload */}
          <div className="my-4">
            <Label htmlFor="file" value="Upload Logo" />
            <FileInput
              id="file"
              helperText="A profile picture is useful to validate your Catering business"
            />
          </div>

          {/* Packages Section */}
          <div className="my-4 p-4 border border-gray-200 rounded">
            <Label htmlFor="Packages" value="Packages Section" className="text-xl" />
            {packages.map((packageData, packageIndex) => (
              <div key={packageIndex} className="mb-4">
                <TextInput
                  id={`package-name-${packageIndex}`}
                  type="text"
                  placeholder="Package Name"
                  required
                  value={packageData.name}
                  onChange={(e) => {
                    const updatedPackages = [...packages];
                    updatedPackages[packageIndex].name = e.target.value;
                    setPackages(updatedPackages);
                  }}
                />
                <FileInput id={`package-file-${packageIndex}`} helperText="Upload a picture of the package" className="my-2" />
                {packageData.dishes.map((dish, dishIndex) => (
                  <div key={dishIndex} className="mt-2">
                    <TextInput id={`dish-name-${packageIndex}-${dishIndex}`} type="text" placeholder="Dish Name" required />
                    <FileInput id={`dish-file-${packageIndex}-${dishIndex}`} helperText="Upload a picture of the dish" className="my-2"/>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addDishToPackage(packageIndex)}
                  className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Dish
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addPackage}
              className="mt-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Add Package
            </button>
          </div>

          {/* Additional Information section */}
          <div className="my-4">
            <Label htmlFor="Aditional" value="Aditional Information" className="text-xl" />
            <textarea
              id="description"
              className="w-full h-24 p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Tell us about your Catering business"
            ></textarea>
          </div>
          <FileInput id="additional-file" helperText="Certificates, Menus or additional information that can help us validate your catering" />
        </div>
      </div>
    </div>
  );
};

export default CateringForm;
