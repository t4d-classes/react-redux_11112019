import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool, CarTool } from './components';

const colorList = ['black', 'white', 'blue', 'orange'];

const cars = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'white', price: 25000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 125000 },
];

ReactDOM.render(
  // React.createElement(ColorTool, { headerText: "Color Tool", colors: colorList}),
  <>
    <ColorTool headerText="Color Tool" colors={colorList} />
    <CarTool cars={cars} />
  </>,
  document.querySelector('#root'),
);
