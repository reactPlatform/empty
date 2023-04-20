import React from 'react'
import classes from '../MealItem/MealItem.module.css';
import MealItemForm from '../MealItem/MealItemForm';
export default function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`;
  return (
    <div>
        <li className={classes.meal}>
            <div><h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <div>
                <MealItemForm />
            </div>
        </li>
    </div>
  )
}
