import Header from './components/Layout/Header';
import './App.css';
import { useState } from 'react';
import Meals from '../src/components/Meals/Meals';
import Cart from '../src/components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setcartIsShown] = useState(false);
  const showCartHandler = () =>{
    setcartIsShown(true);
  }
  const hideCartHandler = () => {
    setcartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}></Header>
      <Meals />
    </CartProvider>
  );
}

export default App;
