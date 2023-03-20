import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/info">Information Personelles</NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Navigation;
