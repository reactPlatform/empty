import React from 'react'
import CartContext from './cart-context';
export default function CartProvider(props) {
    const addItemToCartHandler = item => {};
    const removeItemFromCartHandler = item => {};
    const CartContext = {
        items:[],
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
  return (
    <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
  )
}
