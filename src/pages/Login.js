import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/login.css";
const Login = () => {
  const [page, setPage] = useState("login");

  return (
    <div className="page">
      <div className="container border col col-3 p-0 shadow">
        <div
          className="login"
          onClick={(_) => setPage("login")}
          style={{ backgroundColor: page === "login" ? "#34b3a0" : "#fff" }}
        >
          Log In
        </div>
        <div
          className="signup"
          onClick={(_) => setPage("signup")}
          style={{ backgroundColor: page !== "login" ? "#34b3a0" : "#fff" }}
        >
          Sign Up
        </div>

        {page === "login" ? <LoginWrapper /> : <SignupWrapper />}
      </div>
    </div>
  );
};

export default Login;

const SignupWrapper = (_) => {
  return (
    <div className="signup-form">
      <input type="text" placeholder="Your Email Address" className="input" />
      <br />
      <input type="text" placeholder="Choose a Username" className="input" />
      <br />
      <input
        type="password"
        placeholder="Choose a Password"
        className="input"
      />
      <br />
      <Link to="/dashboard">
        <button className="btn btn-info"> Create account</button>
      </Link>
    </div>
  );
};

const LoginWrapper = ({}) => {
  return (
    <div className="login-form">
      <input type="text" placeholder="Email or Username" className="input" />
      <br />
      <input type="password" placeholder="Password" className="input" />
      <br />
      <Link to="/dashboard">
        <button className="btn btn-info"> Login</button>
      </Link>
    </div>
  );
};
