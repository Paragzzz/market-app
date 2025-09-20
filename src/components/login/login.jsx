import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      {/* Floating decorative circles */}
      <div className="circle c1"></div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>

      <div className="login-container shadow-lg">
        <img
          src="logo.png"
          alt="OpenMarket"
          className="login-logo"
        />
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Login to access your OpenMarket account</p>

        <form>
          <div className="mb-3">
            <input type="email" className="form-control input-field" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control input-field" placeholder="Password" />
          </div>
          <div className="d-flex justify-content-between mb-3 align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
          <button type="submit" className="btn login-btn w-100">Login</button>
        </form>

        <p className="mt-4 text-center signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
