import React from 'react';

function SearchBar(props) {
    return (
      <div className='search-bar'>
        <form onSubmit={props.onSubmit}>
          <label className="search-title">
          Address or City:<br />
          <input onChange={props.onChange} id="address" type="text"/>
          </label><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default SearchBar;
