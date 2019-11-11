import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([ ...props.colors ]);

  const [ colorForm, change, resetColorForm ] = useForm({
    color: '',
  });

  const addColor = () => {

    setColors(colors.concat(colorForm.color));

    resetColorForm();

  };

  console.log(colorForm);

  return <>
    <header>
      <h1>{props.headerText}</h1>
    </header>
    <ul>
      {colors.map(
        (color) => <li key={color}>{color}</li>
      )}
    </ul>
    <form>
      <div>
        {/* React.createElement('label', { htmlFor: 'color-input' }, 'Color:') */}
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={colorForm.color} onChange={change}  />
      </div>
      <button type="button" onClick={addColor}>Add Color</button>
    </form>
  </>
};

ColorTool.defaultProps = {
  headerText: 'Car Tool',
};

ColorTool.propTypes = {
  headerText: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
