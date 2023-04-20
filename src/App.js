import Header from './components/Layout/Header';
import './App.css';
import { Fragment , useState } from 'react';
import Meals from '../src/components/Meals/Meals';
import Cart from '../src/components/Cart/Cart';

function App() {
  const [cartIsShown,setcartIsShown] = useState(false);
  const showCartHandler = () =>{
    setcartIsShown(true);
  }
  const hideCartHandler = () => {
    setcartIsShown(false);
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
