import React from 'react';

function Swatch(props){
  return (
    <div
      id='colorSwatch'
      style={{ backgroundColor: props.value }}
    />
  )
}

export default Swatch;
