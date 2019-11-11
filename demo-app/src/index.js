import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool, CarTool } from './components';

const colorList = ['black', 'white', 'blue', 'orange'];

ReactDOM.render(
  // React.createElement(ColorTool, { headerText: "Color Tool", colors: colorList}),
  <>
    <ColorTool headerText="Color Tool" colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);
