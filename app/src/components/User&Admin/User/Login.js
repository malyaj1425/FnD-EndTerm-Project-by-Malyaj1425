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
  return (
    <div className="loginback">
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
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
          <button type="submit" className="btn btn-primary" onClick={home}>
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
