import React from 'react';

export const ColorTool = ({ headerText, colors }) => {

  return <>
    <header>
      <h1>{headerText}</h1>
    </header>
    <ul>
      {colors.map(
        (color) => <li key={color}>{color}</li>
      )}
    </ul>
  </>
};