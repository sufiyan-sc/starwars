import React from 'react';

function Form({ getMovie }) {
  return (
    <form className="Form" onSubmit={getMovie}>
      <input
        className="Form--Input"
        type="Text"
        name="movieName"
        autoComplete="off"
        placeholder="movies"
      />
      <button className="Form--SearchBtn">
        <p>Search</p>
      </button>
    </form>
  );
}

export default Form;
