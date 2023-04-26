import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from '../Layout/HeaderCardButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNumber,item) => {
    return currNumber + item.amount;
  },0);
  return (
    <div>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    </div>
  )
}
