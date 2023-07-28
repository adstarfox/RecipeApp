import { useState } from "react";
import React from "react";
import "./NewRecipeScreen.css";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const addIngredient = (event) => {
    event.preventDefault();

    setIngredients([
      ...ingredients,
      {
        name: name,
        quantity: quantity,
      },
    ]);
    setName("");
    setQuantity("");
  };

  const singleIngredient =
    ingredients.length > 0 &&
    ingredients.map((ing, index) => {
      return <li key={index}>{ing.quantity + " " + ing.name}</li>;
    });

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    let newLink;
    console.log(values);
    axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => navigate(`/recipe/${res.data[0][0].recipe_id}`))
      .catch((err) => console.log(err));

    console.log(newLink);
  };

  return (
    <section className="form-container">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form className="form-form">
              <span id="first-container">
                <input
                  type="text"
                  placeholder="Name"
                  value={values.recipeName}
                  name="recipeName"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={values.imageURL}
                  name="imageURL"
                  onChange={handleChange}
                />
              </span>
              <div id="radio-btn-container">
                <label className="radio-btns">
                  <input
                    type="radio"
                    name="type"
                    value="Cook"
                    onChange={handleChange}
                  />
                  Cook
                </label>

                <label className="radio-btns">
                  <input
                    type="radio"
                    name="type"
                    value="Bake"
                    onChange={handleChange}
                  />
                  Bake
                </label>
                <label className="radio-btns">
                  <input
                    type="radio"
                    name="type"
                    value="Drink"
                    onChange={handleChange}
                  />
                  Drink
                </label>
              </div>
              <span className="second-container">
                <input
                  type="text"
                  placeholder="Prep Time"
                  value={values.prepTime}
                  name="prepTime"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Cook Time"
                  value={values.cookTime}
                  name="cookTime"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Serves"
                  value={values.serves}
                  name="serves"
                  onChange={handleChange}
                />
              </span>
              <span id="ingredients-container">
                <div id="ingredient-inputs">
                  <input
                    type="text"
                    placeholder="Ingredient"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <ul>{singleIngredient}</ul>
              </span>
              <button id="ingredient-btn" onClick={addIngredient}>
                Add Another
              </button>
              <textarea
                name="instructions"
                id="intructions-container"
                cols="30"
                rows="10"
                placeholder="What are the instructions?"
                value={values.instructions}
                onChange={handleChange}
              >
                {/* <input
                  id="intructions-container"
                  type="text"
                  placeholder="What are the instructions"
                  value={values.instructions}
                  name="instructions"
                  onChange={handleChange}
                /> */}
              </textarea>
              <button id="save-btn" onClick={handleSubmit}>
                Save
              </button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
