import React from "react";
import "./SignUp.css"; // new CSS file for SignUp

const SignUp = () => {
  return (
    <div className="signup-page">
      {/* Floating decorative circles */}
      <div className="circle c1"></div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>

      <div className="signup-container shadow-lg">
        <img
          src="logo.png"
          alt="OpenMarket"
          className="signup-logo"
        />
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Sign up to join OpenMarket</p>

        <form>
          <input type="text" className="form-control input-field" placeholder="Full Name" />
          <input type="email" className="form-control input-field" placeholder="Email Address" />
          <input type="password" className="form-control input-field" placeholder="Password" />
          <input type="password" className="form-control input-field" placeholder="Confirm Password" />

          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="terms" />
            <label className="form-check-label" htmlFor="terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="btn signup-btn w-100">Sign Up</button>
        </form>

        <p className="mt-4 text-center signup-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
