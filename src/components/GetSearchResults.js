import React from 'react';
import SearchHistory from './SearchHistory';
const uuidv4 = require('uuid/v4');

function GetSearchResults(props) {
  const { history } = props;
  const searchHistory = history.slice(-5);
  return (
  <div className="search-result">
    <p>Past Search Results</p>
    <table style={{'width': '100%'}}>
      <thead>
        <tr>
          <th>Location</th>
          <th>Air Quality Color</th>
          <th>Air Quality Description</th>
          <th>Air Quality Index</th>
        </tr>
      </thead>
      <tbody>
        {searchHistory.map((item) =>
          <SearchHistory
            key={JSON.stringify(uuidv4())}
            address={item.address}
            color={item.color}
            description={item.description}
            aqi={item.aqi}
          />
        )
      }
      </tbody>
    </table>
  </div>
  )
};

export default GetSearchResults;
