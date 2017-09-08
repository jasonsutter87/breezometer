import React from 'react';
import SearchHistory from './SearchHistory';

function GetCurrentSearchResult(props) {
  const { history } = props;
  let searchHistory;
  if(history.length < 6) {
     searchHistory = history.slice(history.length -1, history.length);
  } else {
    searchHistory = history.slice(history.length -1)
  }
  return (
    <div className="search-result">
      <p>Current Search Results</p>
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
              key={JSON.stringify(new Date().getTime())}
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

export default GetCurrentSearchResult;
