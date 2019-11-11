import React from 'react';

export const ColorTool = () => {

  const colors = ['black', 'white', 'blue', 'orange'];

  const colorListItems = colors.map(
    (color, index) => <li key={color}>{color}</li>
  );

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {colorListItems}
    </ul>
  </>
};