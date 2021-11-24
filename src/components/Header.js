import React from 'react';
import Form from './Form';
import StarWarsSolidLogo from '../assets/starwars-solid-logo.svg';

function Header({ getMovie }) {
  return (
    <div className="Header">
      <img src={StarWarsSolidLogo} alt="Star Wars" />
      <Form getMovie={getMovie} />
    </div>
  );
}

export default Header;
