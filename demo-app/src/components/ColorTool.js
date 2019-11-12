import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([ ...props.colors ]);

  const addColor = (color) => {
    setColors(colors.concat(color));
  };

  return <>
    <header>
      <h1>{props.headerText}</h1>
    </header>
    <ul>
      {colors.map(
        (color) => <li key={color}>{color}</li>
      )}
    </ul>
    <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
  </>
};

ColorTool.defaultProps = {
  headerText: 'Car Tool',
};

ColorTool.propTypes = {
  headerText: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
