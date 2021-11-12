import { Route } from 'react-router';
import React, {useEffect, useState} from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
 
import { useSelector } from 'react-redux';

import './app.scss'
function App() {
  

  const group = useSelector(({ cartReduser }) => cartReduser);
  const [count, setCount] = useState(0);
  useEffect(()=>{
    let temp=0
     if (group.length>0){temp=group.reduce((acc, curr)=>{
 return acc+curr.count;
     },0)
   }
 setCount(temp);})
  
  return (
    <div>
      <div className="wrapper">
        <Header totalCount={count}/> 
          <Route path="/" component={Home} exact></Route>
          <Route path="/cart" component={()=><Cart count={count}/>} exact></Route>
      </div>
      <Footer/>
    </div>
    );
  }
  export default App;
  