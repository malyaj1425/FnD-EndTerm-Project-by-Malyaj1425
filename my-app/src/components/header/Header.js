import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Homepage from "../home/homepage";
import Layout from "./Layout";
import Login from "../User&Admin/User/Login";
import Itemcards from "../ItemPage/Itemcards";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import Best from "../Deals/Bestsellers/Best";
import Offers from "../Deals/Offers/Offers";
import Daily from "../Deals/Dailyneeds/Daily";
import AdminPage from "../Admin/AdminPage/AdminPage";
import ALogin from "../Admin/AdminLogin";
import SignUp from "../User&Admin/User/SignUp";
import Checkout from "../Cart/Checkout";
import Footer from "./Footer";
import Feedback from "../Feedback/feedback";



const Header = ({handleClick,cart,setCart, handleChange}) => (
  
  <div>
  {/* <div className="header navbar">
    <a className="navbar-brand" id="logo">Navbar</a>
    <form className="d-flex" id="links">
      <button className="btn btn-outline-danger" type="submit">Search</button>
      <button className="btn btn-outline-success" type="submit">Cart</button>
      <button className="btn btn-outline-success" type="submit">User</button>
    </form>
  </div>
  <SideBar/> */}
  
      <Routes>
        <Route path="/" element={<Layout size={cart.length}/>}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/items" element={<Itemcards handleClick={handleClick}/>} />
          <Route path="/best" element={<Best handleClick={handleClick}/>} />
          <Route path="/offer" element={<Offers handleClick={handleClick}/>} />
          <Route path="/daily" element={<Daily handleClick={handleClick}/>} />
          <Route path="/search" element={<Search handleClick={handleClick}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
          <Route path="/adminpage" element={<AdminPage/>}/>
          <Route path="/adminlogin" element={<ALogin/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/feedback" element={<Feedback/>}/> 
        </Route>
      </Routes>
  </div>
)
// project by malyaj singh 2010991425 g22 chitkara
// project by malyaj singh 2010991425 g22 chitkara


export default Header;