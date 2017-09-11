import React from 'react';
import SearchHistory from './SearchHistory';
const uuidv4 = require('uuid/v4');

function SearchResults(props) {
  const { history } = props;
  const searchHistory = history.slice(-5);
  return (
  <div className="search-result">
    <p className="table-title">Past Search Results</p>
    <table style={{'width': '100%'}}>
      <thead>
        <tr>
          <th className='center'>Location</th>
          <th className='center'>Air Quality Index</th>
          <th className='center'>Air Quality Color</th>
          <th className='center'>Air Quality Description</th>
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

export default SearchResults;
