import React from 'react';
import SearchHistory from './SearchHistory';

function CurrentSearchResult(props) {
  const { history, errorMsg } = props;
  const searchHistory = history.slice(0,1);
  return (
    <div className="search-result">
      <div>
        <p className="error-handling">{errorMsg}</p>
      </div>
      <p className="table-title">Current Search Results</p>
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

export default CurrentSearchResult;
