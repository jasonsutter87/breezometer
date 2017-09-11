import React from 'react';

function SearchHistory(props) {
  return (
    <tr>
      <td className='center'>{props.address}</td>
      <td className='center'>{props.aqi}</td>
      <td
        className="center swatch"
        style={{
           'backgroundColor': props.color,
         }}>
      </td>
      <td className='center'>{props.description}</td>
    </tr>
  )
};

export default SearchHistory;
