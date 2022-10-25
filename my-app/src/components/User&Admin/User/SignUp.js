import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigation = useNavigate();
  function home() {
    navigation("/");
  }
  function login() {
    navigation("/login");
  }
  function validate(){
    var fname=document.forms["frm"]["fname"].value;
    var lname=document.forms["frm"]["lname"].value;
    var email=document.forms["frm"]["email"].value;
    var pass=document.forms["frm"]["password"].value;
    if(fname===""){
      alert("enter valid first name");
      return false;
    }
    else if(pass===""){
      alert("enter valid password");
      return false;
    }
    else if(lname===""){
      alert("enter valid last name");
      return false;
    }
    else if(email===""){
      alert("enter valid email");
      return false;
    }
    else{
      alert("account created!");
      localStorage.setItem("fname", fname);
      localStorage.setItem("lname", lname);
      localStorage.setItem("email", email);
      localStorage.setItem("pass", pass);
      home();
    }
  }
  return (
    <div className="loginback">
      <div className="Titleboxcart">
        <h1 className="Titlecart">Sign Up</h1>
      </div>
      <form name="frm" onSubmit={validate} className="loginform">
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="fname"
          
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" name="lname" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          
            name="email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="" onClick={login}>sign in?</a>
        </p>
      </form>
    </div>
  );
}
// project by malyaj singh 2010991425 g22 chitkara
