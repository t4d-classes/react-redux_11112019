import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [ colorForm, change, resetColorForm ] = useForm({
    color: '',
  });

  const submitColor = () => {
    onSubmitColor(colorForm.color);
    resetColorForm();
  };

  return <form>
    <div>
      <label htmlFor="color-input">Color:</label>
      <input type="text" id="color-input" name="color"
        value={colorForm.color} onChange={change}  />
    </div>
    <button type="button" onClick={submitColor}>{buttonText}</button>
  </form>;
};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

ColorForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitColor: PropTypes.func.isRequired,
};
