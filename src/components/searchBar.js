import React from 'react';

function SearchBar(props) {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <label>
          Address or City:<br />
          <input onChange={props.onChange} id="address" type="text"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default SearchBar;
