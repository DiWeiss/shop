import { Route } from 'react-router';
import React from 'react';
import {useDispatch} from 'react-redux'

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './Header/Header';
import Footer from './Footer/Footer';




function App() {
  
  const dispatch = useDispatch();
  
  
  
  return (
    <div>
      <div className="wrapper">
        <Header/> 
          <Route path="/" component={Home} exact></Route>
          <Route path="/cart" component={Cart} exact></Route>
      </div>
      <Footer/>
    </div>
    );
  }
  export default App;
  