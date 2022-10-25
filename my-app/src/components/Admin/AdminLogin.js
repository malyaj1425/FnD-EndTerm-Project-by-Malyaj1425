import React from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";
export default function ALogin() {
    const navigation = useNavigate();
    function home() {
      navigation("/adminpage");
    }
    function validate() {
      var pass = document.forms["frm"]["pass"].value;
      
      if (pass === "123") {
        home();
      } else {
        alert("Invalid Password")
        return false;
      }
    }
  return (
    <div className="block">
    <div className="loginback">
    <div className="Titleboxcart">
        <h1 className="Titlecart">Login (admin password:123)</h1>
      </div>
      <form name="frm" onSubmit={validate} className="loginform">
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            name="mail"
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
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
    </div>
  );
}
// project by malyaj singh 2010991425 g22 chitkara
