import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container py-5">
        <h1 className="text-center mb-5 page-title">Contact Us</h1>
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="glass-card p-4 shadow-lg">
              <form>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control contact-input" id="name" placeholder="Full Name"/>
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control contact-input" id="email" placeholder="Email"/>
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control contact-input" id="subject" placeholder="Subject"/>
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control contact-input" id="message" placeholder="Message" rows="5"></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <button type="submit" className="btn neon-btn w-100">Send Message</button>
              </form>
            </div>
          </div>

          {/* Contact Info + Map */}
          <div className="col-lg-6">
            <div className="info-cards mb-4">
              <div className="info-card mb-3 p-3 shadow-sm">
                <h5>Email</h5>
                <p>support@openmarket.com</p>
              </div>
              <div className="info-card mb-3 p-3 shadow-sm">
                <h5>Phone</h5>
                <p>+91 98765 43210</p>
              </div>
              <div className="info-card mb-3 p-3 shadow-sm">
                <h5>Address</h5>
                <p>Dhoraji, Gujarat, India</p>
              </div>
            </div>
            <div className="map-container rounded shadow-lg">
              <iframe
                title="OpenMarket Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.631949807916!2d70.58214291535005!3d21.745106985508716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39538e6f0e2cb7e3%3A0x7b91b4c7ffeb6d4f!2sDhoraji!5e0!3m2!1sen!2sin!4v1695370142927!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
