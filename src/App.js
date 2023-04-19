import Header from './components/Layout/Header';
import './App.css';
import { Fragment } from 'react';
import Meals from '../src/components/Meals/Meals';

function App() {
  return (
    <Fragment>
      
      <Header></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
