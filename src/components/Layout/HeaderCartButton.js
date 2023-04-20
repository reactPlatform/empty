import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from '../Layout/HeaderCardButton.module.css';
export default function HeaderCartButton(props) {
  return (
    <div>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    </div>
  )
}
