import React from "react";
import { directive } from "@babel/types";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories} cal</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
