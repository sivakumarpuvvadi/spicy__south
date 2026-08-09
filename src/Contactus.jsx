import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contactus() {
  return (
    <div className="contact-page">

      {/* ===== Hero Section ===== */}
      <section className="bg-warning text-dark py-5">
        <div className="container text-center">
          <h1 className="fw-bold">Let’s Talk</h1>
          <p className="lead mb-0">
            Questions, feedback, or business inquiries — we’re here for you.
          </p>
        </div>
      </section>

      {/* ===== Main Content ===== */}
      <section className="container my-5">
        <div className="row align-items-stretch shadow rounded overflow-hidden">

          {/* Left: Contact Form */}
          <div className="col-md-7 bg-white p-5">
            <h4 className="fw-bold mb-4">Send a Message</h4>

            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="john@email.com" />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button className="btn btn-dark px-4">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="col-md-5 bg-dark text-white p-5 d-flex flex-column justify-content-center">
            <h4 className="fw-bold mb-4">Contact Details</h4>

            <p className="mb-3">
              <i className="bi bi-geo-alt me-2"></i>
              Hyderabad, Telangana
            </p>

            <p className="mb-3">
              <i className="bi bi-telephone me-2"></i>
              +91 95505 35197
            </p>

            <p className="mb-4">
              <i className="bi bi-envelope me-2"></i>
              contact@spicysouthfood.com
            </p>

            <div>
              <a href="#" className="text-white me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white me-3 fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

        </div>
      </section>

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

export default Contactus;
