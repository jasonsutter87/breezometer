import React from 'react';

function SearchBar () {
  return (
    <div>
      <form>
        <label>
        City:<br />
        <input type="text"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SearchBar;
