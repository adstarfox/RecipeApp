import RecipeCard from "./RecipeCard";
import "./RecipeContainer.css";
import searchIcon from "./../../assets/search.png";
import { useState } from "react";

const RecipeContainer = () => {
  const [search, setSearch] = useState("");
  
  

  return (
    <div className="recipe-container">
      <span className="search-bar">
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search for a Recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
      <span className="recipe-cards">
        <RecipeCard />
      </span>
    </div>
  );
};

export default RecipeContainer;
