import React from 'react';
import Aux from './../../../hoc/Auxiliary';

const orderSummary = props => {
  const ingredientsList = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}:</span>
        {props.ingredients[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsList}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;