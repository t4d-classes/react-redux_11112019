import React from 'react';
import PropTypes from 'prop-types';

import { carsPropType } from '../propTypes/carsPropTypes';

import { CarViewRow } from './CarViewRow';

export const CarTable = ({ cars, onDeleteCar: deleteCar }) => {

  return <table>
    <thead>
    <tr>
      <th>Id</th>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
      <th>Color</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
      {cars.map(car =>
        <CarViewRow key={car.id} car={car} onDeleteCar={deleteCar} />)}
    </tbody>
  </table>;

};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};
