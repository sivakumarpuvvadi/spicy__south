import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel as BootstrapCarousel } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  // ✅ Initialize Bootstrap Carousel

  useEffect(() => {
    const carouselElement = document.querySelector("#homeCarousel");
    if (carouselElement) {
      new BootstrapCarousel(carouselElement, {
        interval: 3000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  const categories = [
    { id: 1, title: "Veg Biryani", img: "/images/veg-biryani.jpg", path: "/veg" },
    { id: 2, title: "Chicken Biryani", img: "/images/chicken-biryani.jpg", path: "/nonveg" },
    { id: 3, title: "Drinks", img: "/images/pepsi.jpg", path: "/drinks" },
    { id: 4, title: "Milk Shakes", img: "/images/vanilla-milkshake.jpg", path: "/milkshakes" },
  ];

  return (
    <div className="container-fluid p-0 page-content">

      {/* ✅ Video Hero Section */}
      <div className="video-section">
        <video
          className="video-bg"
          src="/videos/backgroundvideo.mp4"  // ✅ no 'public/' prefix
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="video-overlay">
          <h1 className="fw-bold text-warning">Taste OF Home 🍴</h1>
          <p className="text-light">Fresh, Delicious & Delivered to your door</p>
        </div>
      </div>


  

      {/* ✅ Categories Section */}
      <div className="container my-5">
        <h3 className="text-center fw-bold mb-4">🍴 Explore Categories</h3>
        <div className="row g-4">
          {categories.map((cat) => (
            <div className="col-md-3" key={cat.id}>
              <div className="card category-card shadow-sm h-100">
                <img src={cat.img} className="category-img h-100 rounded-3" alt={cat.title} />
                <div className="card-body text-center">
                  <h5 className="category-title">{cat.title}</h5>
                  <Link to={cat.path} className="btn btn-outline-success category-btn mt-2">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Marquee Section */}
      <div className="premium-marquee">
        <div className="scrolling-wrapper">
          <img src="/images/veg-biryani.jpg" alt="Brand 1" className="marquee-img" />
          <img src="/images/fish-curry.jpg" alt="Brand 2" className="marquee-img" />
          <img src="/images/chicken-kebab.jpg" alt="Brand 3" className="marquee-img"/>
          <img src="/images/chole-bhature.jpg" alt="Brand 4" className="marquee-img" />
          <img src="/images/chicken-drumsticks.jpg" alt="Brand 5" className="marquee-img" />
          <img src="/images/chicken-biryani.jpg" alt="Brand 6" className="marquee-img" />
          <img src="/images/veg-biryani.jpg" alt="Brand 1" className="marquee-img" />
          <img src="/images/fish-curry.jpg" alt="Brand 2" className="marquee-img" />
          <img src="/images/chicken-kebab.jpg" alt="Brand 3" className="marquee-img" />
          <img src="/images/chole-bhature.jpg" alt="Brand 4" className="marquee-img" />
          <img src="/images/chicken-drumsticks.jpg" alt="Brand 5" className="marquee-img" />
          <img src="/images/chicken-biryani.jpg" alt="Brand 6" className="marquee-img" />
          <img src="/images/veg-biryani.jpg" alt="Brand 1" className="marquee-img" />
          <img src="/images/fish-fry.jpg" alt="Brand 2" className="marquee-img" />
          <img src="/images/chicken-kebab.jpg" alt="Brand 3"  className="marquee-img"/>
          <img src="/images/chole-bhature.jpg" alt="Brand 4" className="marquee-img" />
          <img src="/images/chicken-drumsticks.jpg" alt="Brand 5" className="marquee-img" />
          <img src="/images/chicken-biryani.jpg" alt="Brand 6" className="marquee-img" />
        </div>
      </div>

       {/* ✅ Carousel */}
      <div
        id="homeCarousel"
        className="carousel slide carousel-fade mb-5 mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded shadow-lg">
          <div className="carousel-item active">
            <img
              src="/images/mutton-curry.jpg"
              className="d-block w-100 hero-img"
              alt="First Slide"
            />
            <div className="carousel-caption">
              <h5>Fresh & Premium</h5>
              <p>Best quality products just for you.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/fish-biryani.jpg"
              className="d-block w-100 hero-img"
              alt="Second Slide"
            />
            <div className="carousel-caption">
              <h5>Healthy Choices</h5>
              <p>Freshness that makes a difference.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/chicken-curry.jpg"
              className="d-block w-100 hero-img"
              alt="Third Slide"
            />
            <div className="carousel-caption">
              <h5>Trusted Quality</h5>
              <p>Handpicked and delivered with care.</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" />
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" />
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" />
        </div>
      </div>

      {/* ✅ Split Section */}
      <div className="container-fluid my-5">
        <div className="row no-gutters d-flex align-items-stretch">
          <div className="col-md-6 p-0">
            <img src="/images/chicken-biryani.jpg" alt="Dining" className="img-fluid h-100 w-100 object-cover" />
          </div>
          <div className="col-md-6 bg-dark text-white d-flex align-items-center p-5">
            <div>
              <h3 className="fw-bold mb-4">Love at First Bite</h3>
              <p>
                Love at first bite, saw two hearts united by a passion for crafting more than just a meal,
                but a celebration of love and irresistible food.
              </p>
              <p>
                Our menu is inspired by the flavours of Italy and blended with South African charm,
                all lovingly curated to bring our famiglia together.
              </p>
              <p><strong>Buon appetito!<br />Kinga & Michael</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Customer Reviews */}
      <div className="container my-5">
        <h4 className="text-center fw-bold mb-4">⭐ Customer Reviews</h4>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card review-card shadow-sm p-3 h-100 text-center">
              <img src="/images/cust1.webp" className="rounded-pill h-100 w-2 mb-3 reviewer-img" alt="Reviewer 1" />
              <h6 className="fw-bold">Sarah L.</h6>
              <p className="text-muted small">“The best pizza I've ever had! Super fresh ingredients and friendly service.”</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card review-card shadow-sm p-3 h-100 text-center">
              <img src="/images/cust2.avif" className="rounded-pill h-100 w-2 mb-3 reviewer-img" alt="Reviewer 2" />
              <h6 className="fw-bold">Jason M.</h6>
              <p className="text-muted small">“Highly recommended! Their non-veg platter was absolutely mouthwatering.”</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card review-card shadow-sm p-3 h-100 text-center">
              <img src="/images/cust3.avif" className="rounded-pill h-100 w-2 mb-3 reviewer-img" alt="Reviewer 3" />
              <h6 className="fw-bold">Priya S.</h6>
              <p className="text-muted small">“Loved the fast delivery and the taste was amazing. Will order again soon!”</p>
            </div>
          </div>
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

export default Home;