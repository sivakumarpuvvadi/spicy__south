import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Aboutus.css";

function Aboutus() {
  return (
    <div>

      {/* ===== Background Video Section ===== */}
      <div className="about-video-section">
        <video autoPlay loop muted playsInline className="about-video">
          <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
        </video>
        <div className="about-overlay">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Where tradition meets taste 🌶️
          </p>
        </div>
      </div>

      {/* ===== Story Section ===== */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Our Story</h2>
            <p className="text-muted">
              Spicy South was born from a passion for authentic South Indian
              cuisine. Every recipe we serve carries generations of tradition,
              slow-cooked flavors, and love for food.
            </p>
            <p className="text-muted">
              From humble beginnings to a trusted food brand, our journey is
              driven by quality, consistency, and customer happiness.
            </p>
          </div>
          <div className="col-md-6">
            <div className="story-highlight p-4 rounded-4 shadow">
              <h5 className="fw-bold">🌶️ Our Promise</h5>
              <p className="mb-0">
                Fresh ingredients, bold spices, and unforgettable taste — every
                single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Feature Cards ===== */}
      <div className="container my-5">
        <div className="row text-center">
          {[
            { icon: "🍲", text: "Authentic South Indian Flavors" },
            { icon: "🌶️", text: "Signature Spicy Recipes" },
            { icon: "👨‍🍳", text: "Experienced Chefs & Staff" },
            { icon: "🏆", text: "Quality and Taste You Trust" },
          ].map((item, idx) => (
            <div className="col-md-3 mb-4" key={idx}>
              <div className="about-card shadow-lg p-4 rounded-4 h-100">
                <h2>{item.icon}</h2>
                <p className="fw-semibold">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Stats Section ===== */}
      <div className="stats-section py-5 text-center">
        <div className="container">
          <div className="row">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "50K+", label: "Happy Customers" },
              { value: "100+", label: "Signature Dishes" },
              { value: "5★", label: "Customer Rating" },
            ].map((stat, i) => (
              <div className="col-md-3 col-6 mb-4" key={i}>
                <h2 className="fw-bold text-warning">{stat.value}</h2>
                <p className="text-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Team Section ===== */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold mb-4">Meet Our Team</h2>
        <div className="row g-4">
          {["Head Chef", "Sous Chef", "Kitchen Manager"].map((role, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="team-card p-4 shadow rounded-4">
                <i className="bi bi-person-circle fs-1 text-warning"></i>
                <h5 className="mt-3 fw-bold">{role}</h5>
                <p className="text-muted small">
                  Passionate about crafting unforgettable flavors.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Branches Section ===== */}
      <div className="branches-section text-center py-5">
        <h2 className="text-warning mb-4">Our Branches in India</h2>
        <div className="row justify-content-center">
          {["Hyderabad", "Bangalore", "Chennai", "Mumbai", "Delhi"].map(
            (city, idx) => (
              <div className="col-md-2 col-sm-4 mb-3" key={idx}>
                <div className="branch-card p-3 shadow-sm rounded-4">
                  <h6 className="fw-semibold">{city}</h6>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* ===== Footer ===== */}
      <footer className="bg-dark text-white mt-5 pt-4 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h4 className="text-warning"><i>spicy south</i></h4>
              <p>
                Delivering the taste of life right to your doorstep. Fresh, fast,
                and delicious!
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <h5>Contact Us</h5>
              <p><i className="bi bi-geo-alt-fill"></i> Hyderabad, India</p>
              <p><i className="bi bi-telephone-fill"></i> +91 95505 35197</p>
              <p><i className="bi bi-envelope-fill"></i> contact@spicysouthfood.com</p>
            </div>

            <div className="col-md-4 mb-3">
              <h5>Follow Us</h5>
              <a href="#" className="text-white me-3 fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3 fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-twitter"></i></a>
            </div>

            <hr className="border-light" />
            <p className="text-center mb-0">
              &copy; 2025 Spicy South. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Aboutus;
