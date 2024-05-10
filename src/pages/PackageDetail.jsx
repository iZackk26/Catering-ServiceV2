import React from 'react'
import { useParams } from 'react-router-dom';

export default function PackageDetail() {
  const { packageId } = useParams();
  // Aquí puedes cargar los datos del paquete usando 'packageId'

  return (
      <div>
          <h1>Detalle del Paquete {packageId}</h1>
          // Mostrar más detalles aquí...
      </div>
  );
}
