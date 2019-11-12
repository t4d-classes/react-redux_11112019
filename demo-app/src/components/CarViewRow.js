import React from 'react';
import PropTypes from 'prop-types';

import { carPropType } from '../propTypes/carsPropTypes';

export const CarViewRow = ({ car, onDeleteCar: deleteCar }) => {

  return <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td>
      <button type="button"
        onClick={() => deleteCar(car.id)}>
          Delete</button>
    </td>
  </tr>;

};

CarViewRow.propTypes = {
  car: carPropType.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};
