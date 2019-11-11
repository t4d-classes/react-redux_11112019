import React, { useState } from 'react';

import { carsPropType } from '../propTypes/carsPropTypes';

export const CarTool = ({ cars }) => {

  const [ carForm, setCarForm ] = useState({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const change = ({ target: { name, type, value } }) => {
    setCarForm({
      ...carForm,
      [ name ]: type === 'number'
        ? (value.length > 0) && Number(value)
        : value,
    });
  };

  console.log(carForm);

  return <>
    <header>
      <h1>Car Tool</h1>
    </header>
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
        {cars.map(car => <tr key={car.id}>
          <td>{car.id}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.year}</td>
          <td>{car.color}</td>
          <td>{car.price}</td>
        </tr>)}
      </tbody>
    </table>
    <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make"
          value={carForm.make} onChange={change}  />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={carForm.color} onChange={change}  />
      </div>
    </form>
  </>;

};

CarTool.propTypes = {
  cars: carsPropType.isRequired,
};
