import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/home/homepage';
import Login from './components/User&Admin/User/Login';
import {Card} from "react-bootstrap";
import Itemcards from './components/ItemPage/Itemcards';
import { useState, useEffect } from "react";
import AdminPage from './components/Admin/AdminPage/AdminPage';
import Checkout from './components/Cart/Checkout';


const App=()=> {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].stock += d;

    if (arr[ind].stock === 0) arr[ind].stock = 1;
    setCart([...arr]);
  };
  return (
    <div className="App">
      <Header handleClick={handleClick} cart={cart} setCart={setCart} handleChange={handleChange}/>

    </div>
  );
}
// project by malyaj singh 2010991425 g22 chitkara
// project by malyaj singh 2010991425 g22 chitkara

export default App;
