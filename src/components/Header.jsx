import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="header-container">
      <h2 className="header-items">Devmountain Eatery</h2>
      <nav className="header-items">
          <NavLink to="" className={({ isActive }) => isActive ? 'active' : 'inactive'}>
            <button className="Button">Home</button>
          </NavLink>
          <NavLink to="newRecipe" className={({ isActive }) => isActive ? 'active' : 'inactive'}>
            <button className="Button">Add Recipe</button>
          </NavLink>
      </nav>
    </header>
  );
};

export default Header;
