import React from 'react';
import { ListGroup } from "flowbite-react";

const PackageItem = ({ name, imageSrc }) => {
  return (
    <ListGroup.Item className="w-full list-none">
      <div className="flex justify-between items-center w-full">
        <span>{name}</span>
        <img src={imageSrc} alt={name} className="ml-auto w-10 h-10 rounded-full" />
      </div>
    </ListGroup.Item>
  );
};

export default PackageItem;  // Nota la exportación por defecto aquí
