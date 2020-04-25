import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const burger = props => {
  const ingredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((_, i) => (
        <Ingredient key={key + i} type={key} />
      ));
    })
    .reduce((arr, element) => {
      return [...arr, ...element];
    }, []);

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {ingredients.length ? (
        ingredients
      ) : (
        <p>Please start adding ingredients</p>
      )}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;
