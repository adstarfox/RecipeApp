import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="header-container">
      <h2 className="header-items">Devmountain Eatery</h2>
      <nav className="header-items">
          <Link to="">
            <button className="Button">Home</button>
          </Link>
          <Link to="newRecipe">
            <button className="Button">Add Recipe</button>
          </Link>
      </nav>
    </header>
  );
};

export default Header;
