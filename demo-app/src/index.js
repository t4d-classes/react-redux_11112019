import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool, CarTool } from './components';

ReactDOM.render(
  // React.createElement(ColorTool),
  <>
    <ColorTool />
    <CarTool />
  </>,
  document.querySelector('#root'),
);
