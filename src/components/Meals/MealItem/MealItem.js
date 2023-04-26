import React from 'react'
import classes from '../MealItem/MealItem.module.css';
import MealItemForm from '../MealItem/MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
export default function MealItem(props) {
  const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = amount => {
      cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
      });
    }
  return (
    <div>
        <li className={classes.meal}>
            <div><h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    </div>
  )
}
