import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";


const Cart = ({ cart, setCart, handleChange }) => {
  const navigation = useNavigate();
  function checkout() {
    if(price>0){
      navigation("/checkout");
    }
    else{
      alert("Cart is empty")
    }
    
  }
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.stock * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  
  return (
    <div style={{marginBottom:"150px"}}>
      <div className='Titleboxcart'>
        <h1 className='Titlecart'>Your Falkreath's Cart</h1>
        </div>
    
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.stock}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>
          Total price of your cart
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
            </svg>
          </span>
        </span>
        <span>Rs - {price}</span>
      </div>
      <div className="d-flex justify-content-end">
      <button id="buybutton" onClick={checkout}>BUY {localStorage.setItem("tot",price)}</button>
      </div>
    </article>
    </div>
  );
};

export default Cart;
// project by malyaj singh 2010991425 g22 chitkara
