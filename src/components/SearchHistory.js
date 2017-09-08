import React from 'react';

function SearchHistory(props) {
  return (
    <tr>
      <td>{props.address}</td>
      <td
        className="swatch"
        style={{
           'backgroundColor': props.color,
         }}>
      </td>
      <td>{props.description}</td>
      <td>{props.aqi}</td>
    </tr>
  )
};

export default SearchHistory;
