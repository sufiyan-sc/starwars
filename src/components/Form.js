import React from 'react';
import useInputState from '../hooks/useInputState';

function Form({ filterSearch }) {
  const [searchVal, handleChange] = useInputState('');
  return (
    <form
      className="Form"
      onChange={(event) => {
        event.preventDefault();
        filterSearch(searchVal);
      }}
    >
      <input
        className="Form--Input"
        type="Text"
        name="movieName"
        autoComplete="off"
        placeholder="movies"
        value={searchVal}
        onChange={handleChange}
      />
      <button className="Form--SearchBtn">
        <p>Search</p>
      </button>
    </form>
  );
}

export default Form;
