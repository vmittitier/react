import React from 'react'

const CarDetails = ({brand, km, color, newCar }) => {
  return (
    <div>
        <h2>detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro eh novo!</p>}

    </div>
  )
}

export default CarDetails