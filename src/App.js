import Header from './components/Layout/Header';
import './App.css';
import { Fragment } from 'react';
import Meals from '../src/components/Meals/Meals';
import Cart from '../src/components/Cart/Cart';
function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
