import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
export default function Login() {
  const navigation = useNavigate();
  function home() {
    navigation("/");
  }
  function signup() {
    navigation("/signup");
  }
  function validate() {
    var pass = document.forms["frm"]["pass"].value;
    var email= document.forms["frm"]["email"].value
    
    if (pass === localStorage.getItem("pass")) {
      home();
    } else {
      alert("Invalid Password")
      return false;
    }
    if (email === localStorage.getItem("email")) {
      home();
    } else {
      alert("Invalid Email")
      return false;
    }
  }
  return (
    <div className="loginback">
      <div className="Titleboxcart">
        <h1 className="Titlecart">Sign In/Login</h1>
      </div>
      <form name="frm" onSubmit={validate} className="loginform">
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            name="email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            name="pass"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Don't have an account? <a href="#" onClick={signup}>Create a Account</a>
        </p>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
}

// project by malyaj singh 2010991425 g22 chitkara
