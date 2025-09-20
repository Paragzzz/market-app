import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/login/Signup";
import './App.css'
import About from "./components/About/About";
import Contact from "./components/contactus/Contact";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-5"> {/* Push content below navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login/>}></Route>
          <Route path="signup" element={<SignUp/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>





        </Routes>
      </div>
    </Router>
  );
}

export default App;
