import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImgBanner from "./ImgBanner";
import "./DetailScreen.css";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const ingredientList = recipe.ingredients?.map((ingredient) => {
    return <h3 key={ingredient.ingredient_id}>{ingredient.quantity} {ingredient.ingredient}</h3>;
  });

  return (
    <section>
      <ImgBanner img={recipe.image_url} name={recipe.recipe_name} />
      <div className="details-container">
        <aside className="recipe-ingredients">
          <h1 className="titles">Recipe</h1>
          <span className="times">
            <h3>{`Prep Time: ${recipe.prep_time}`}</h3>
            <h3>{`Cook Time: ${recipe.cook_time}`}</h3>
            <h3>{`Serves: ${recipe.serves}`}</h3>
          </span>

          <h1 className="titles">Ingredients</h1>
          <span className="ingredients">{ingredientList}</span>
        </aside>
        <aside className="instructions">
          <h1 className="titles"> Instructions</h1>
          <p style={{ whiteSpace: "pre-wrap" }}>{recipe.instructions}</p>
        </aside>
      </div>
    </section>
  );
};

export default DetailScreen;
