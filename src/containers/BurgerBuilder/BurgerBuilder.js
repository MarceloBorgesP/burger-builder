import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sumValues = (total, el) => total + el;
    const sum = Object.values(ingredients).reduce(sumValues, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const oldPrice = this.state.totalPrice;
    const updatedCount = oldCount + 1;

    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: updatedCount
    };
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const oldPrice = this.state.totalPrice;
    const updatedCount = oldCount ? oldCount - 1 : oldCount;

    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: updatedCount
    };
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = oldPrice + priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseToggleHandler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert('Continue!');
  };

  render() {
    const ingredients = this.state.ingredients;
    let disabledInfo = {};
    for (let key in ingredients) {
      disabledInfo[key] = !ingredients[key];
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseToggleHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ordered={this.purchaseToggleHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
