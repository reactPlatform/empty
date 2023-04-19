import React, { Fragment } from 'react'
import classes from '../Layout/Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
export default function Header() {
  return (
    <Fragment>
        <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
        </div>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='A table full of delicious food'/>
        </div>
    </Fragment>
  )
}
