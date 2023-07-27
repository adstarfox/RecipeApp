import { useState } from "react";
import React from "react";
import "./NewRecipeScreen.css";
import { Formik } from "formik";

const NewRecipeScreen = () => {

const [ingredients, setIngredients] = useState([])
const [name, setName] = useState('')
const [quantity, setQuantity] = useState('')

const addIngredient = () => {
  setIngredients(...ingredients, {
    name: name,
    quantity: quantity
  })
  setName('')
  setQuantity('')
}

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instuctions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients
    console.log(values);
  };

  return (
    <section className="form-container">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className="form-form">
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
                <span className="radio-btns">
                  <input
                    type="radio"
                    name="type"
                    value={values.type}
                    onChange={()=>handleChange('cook')}
                  />
                  <label>Cook</label>
                </span>
                <span className="radio-btns">
                  <input
                    type="radio"
                    name="type"
                    value={values.type}
                    onChange={()=>handleChange('bake')}
                  />
                  <label htmlFor="bake">Bake</label>
                </span>
                <span className="radio-btns">
                  <input
                    type="radio"
                    name="type"
                    value={values.type}
                    onChange={()=>handleChange('drink')}
                  />
                  <label htmlFor="drink">Drink</label>
                </span>
              </div>
              <span>
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
                  <input type="text" placeholder="Ingredient" value={name} onChange={(e) => setName(e.target.value)} />
                  <input type="text" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                </div>
                <ul></ul>
              </span>
              <button onClick={()=>addIngredient()}>Add Another</button>
              <input
                type="text"
                placeholder="What are the instructions"
                value={values.instuctions}
                name="instructions"
                onChange={handleChange}
              />
              <button onClick={handleSubmit}>Save</button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
