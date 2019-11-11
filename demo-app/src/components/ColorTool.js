import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([ ...props.colors ]);

  const [ colorForm, setColorForm ] = useState({
    color: '',
  });

  const change = ({ target: { name, type, value } }) => {

    // updates the state and triggers a re-render of component
    setColorForm({
      ...colorForm, // object spread operator
      // computed property
      // color: 'b',
      [ name ]: type === 'number'
        ? (value.length > 0) && Number(value)
        : value,
    });
  };

  const addColor = () => {

    setColors(colors.concat(colorForm.color));

    setColorForm({
      color: '',
    });

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
