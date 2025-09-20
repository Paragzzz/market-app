import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./About.css";

const About = () => {
  const team = [
    { 
      name: "Parag Gamara", 
      role: "Founder & CEO", 
      img: "parag.jpg",
      insta: "https://www.instagram.com/paragvibess?igsh=MTdpcWNveWlhMzY1dQ=="
    },
    { 
      name: "Uttam", 
      role: "Lead Developer", 
      img: "uttam.jpg",
      insta: "https://www.instagram.com/uttam_patel__01?igsh=MXhqNmhwb2dxdjM2dQ=="
    },
    { 
      name: "Pujan", 
      role: "UI/UX Designer", 
      img: "pujan.jpg",
      insta: "https://www.instagram.com/pujan_patel_4899?igsh=aHZmMnU1aDAwc3Vr"
    },
    { 
      name: "Dhruvik", 
      role: "Project Chief", 
      img: "dhruvik.jpg",
      insta: "#" // You can replace with actual link if available
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero d-flex align-items-center justify-content-center text-center">
        <div className="hero-content">
          <h1>About OpenMarket</h1>
          <p>Your gateway to trusted local professionals</p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="container text-center my-5">
        <div className="glass-card p-4 mx-auto">
          <h2>Who We Are</h2>
          <p>
            OpenMarket connects customers with the best local professionals, making it easy to find services you can trust. Our platform ensures quality, reliability, and convenience.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="glass-card p-4 text-center">
              <h3>Our Mission</h3>
              <p>To connect customers with skilled professionals effortlessly and reliably.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glass-card p-4 text-center">
              <h3>Our Vision</h3>
              <p>To be the go-to platform for finding trusted local services in every city.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title">Meet the Team</h2>
        <div className="row g-4 justify-content-center">
          {team.map((member, idx) => (
            <div className="col-sm-6 col-md-3" key={idx}>
              <div className="team-card text-center p-3 shadow-sm">
                <img src={member.img} alt={member.name} className="team-img mb-3" />
                <h5>{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <a href={member.insta} target="_blank" rel="noopener noreferrer" className="insta-icon">
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">© {new Date().getFullYear()} OpenMarket. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
