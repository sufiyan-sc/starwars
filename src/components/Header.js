import React from 'react';
import Form from './Form';
import StarWarsSolidLogo from '../assets/starwars-solid-logo.svg';

function Header({ filterSearch }) {
  return (
    <div className="Header">
      <img src={StarWarsSolidLogo} alt="Star Wars" />
      <Form filterSearch={filterSearch} />
    </div>
  );
}

export default Header;
