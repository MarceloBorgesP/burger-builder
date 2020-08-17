import React from 'react';
import Button from './../../UI/Button/Button';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

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
      <p>Total Price: {props.price}</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
