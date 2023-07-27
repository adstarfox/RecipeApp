import RecipeCard from "./RecipeCard";
import "./RecipeContainer.css";
import searchIcon from "./../../assets/search.png";
import { useState } from "react";

const RecipeContainer = ({ recipes }) => {
  const [search, setSearch] = useState("");

  let recipeDisplay = recipes
    .filter(recipe => {
      if (recipe.recipe_name.toLowerCase().includes(search.toLowerCase())) {
        return recipe
      }
    })
    .map((recipe, index) => {
      return <RecipeCard key={index} recipe={recipe} />
    })

  return (
    <div className="recipe-container">
      <span className="search-bar">
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          value={search}
          placeholder="Search for a Recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
      <span className="recipe-cards">
        {recipeDisplay}
      </span>
    </div>
  );
};

export default RecipeContainer;
