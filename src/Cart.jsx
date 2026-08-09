import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  addOrder,
} from "./store";
import "./Cart.css";
import { getCouponCode } from "./Coupon";
import emailjs from "@emailjs/browser";
import QRCode from "react-qr-code";
import Swal from "sweetalert2";
import confetti from "canvas-confetti"; // 🎉 install: npm install canvas-confetti
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [manualDiscount, setManualDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [email, setEmail] = useState("");

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const totalDiscount = couponDiscount + manualDiscount;
  const discountAmount = (totalAmount * totalDiscount) / 100;
  const taxAmount = totalAmount * 0.05;
  const netAmount = totalAmount - discountAmount + taxAmount;

  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  if (cartItems.length === 0) {
    return (
      <p className="text-center mt-5 fw-bold fs-4">Your cart is empty.</p>
    );
  }

  // ✅ Apply Coupon
  const handleApplyCoupon = () => {
    const result = getCouponCode(couponCode, totalAmount);
    if (result.isValid) {
      setCouponDiscount(result.couponPercentage);
      Swal.fire({
        icon: "success",
        title: "Coupon Applied 🎉",
        text: `${couponCode.toUpperCase()} applied: ${result.couponPercentage}% off`,
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      setCouponDiscount(0);
      Swal.fire({
        icon: "error",
        title: "Invalid Coupon ❌",
        text: "Please enter a valid coupon code.",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  // ✅ Manual Discount
  const handleQuickDiscount = (percent) => {
    setManualDiscount(percent);
    Swal.fire({
      icon: "info",
      title: "Discount Applied 🎉",
      text: `Manual discount applied: ${percent}% off`,
      timer: 2000,
      showConfirmButton: false,
    });
  };

  // 🎉 Confetti Effect
  const fireConfetti = () => {
    // Multiple bursts for a "blast" effect
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  // ✅ Purchase
  const handlePurchase = () => {
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Missing Email ⚠️",
        text: "Please enter your email to receive purchase details.",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Purchase?",
      text: `Do you want to place this order for ₹${netAmount.toFixed(2)}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "✅ Yes, Place Order",
      cancelButtonText: "❌ Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const purchaseDetails = {
          date: new Date().toLocaleString(),
          items: [...cartItems],
          price: netAmount,
          email: email,
        };

        dispatch(addOrder(purchaseDetails));

        const templateParams = {
          order_id: Date.now(),
          orders: cartItems.map((item) =>({ 
                 name : item.name,
                 price : item.price * item.quantity,
                 units : item.quantity,
          })),
          cost:{
            shipping : 50,
            tax : taxAmount,
            price : netAmount,
            
          },
          email : email,
        }

        emailjs
          .send(
            "service_nz1q2v4",
            "template_awhemaw",
            templateParams,
            "8tIz3sL36YVn5kCD2"
          )
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Purchase Successful ✅",
              text: "Email sent with your order details.",
              timer: 2000,
              showConfirmButton: false,
            });
          })
          .catch(() => {
            Swal.fire({
              icon: "warning",
              title: "Purchase Successful ⚠️",
              text: "Order placed, but email could not be sent.",
              timer: 2000,
              showConfirmButton: false,
            });
          });

        dispatch(clearCart());
        fireConfetti(); // 🎉 blast
        setTimeout(() => navigate("/orders"), 2000); // redirect after 2s
      }
    });
  };

  // ✅ Confirm before Clear Cart
  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will remove all items from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire({
          icon: "success",
          title: "Cart Cleared 🗑",
          text: "Your cart is now empty.",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="container mt-2 pt-2 main">
      <div className="row">
        {/* Cart Items */}
        <div className="col-md-7 mb-4">
          <h2 className="mb-4 text-center fw-bold cart-title">
            🛒 Your Cart ({totalItems} items)
          </h2>
          <ul className="list-group shadow rounded">
            {cartItems.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item-img"
                  />
                  <div className="ms-3">
                    <h5 className="mb-1">{product.name}</h5>
                    <p className="mb-0 text-muted">Price: ₹{product.price}</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => {
                      if (product.quantity > 1)
                        dispatch(decrementQuantity(product.id));
                      else dispatch(removeFromCart(product.id));
                    }}
                  >
                    −
                  </button>
                  <span className="mx-2 fw-bold">{product.quantity}</span>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => dispatch(incrementQuantity(product.id))}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-dark btn-sm mt-3 w-100"
            onClick={handleClearCart}
          >
            🗑 Clear Cart
          </button>
        </div>

        {/* Summary */}
        <div className="col-md-5">
          <h2 className="mb-4 text-center fw-bold discount-title">💰 Summary</h2>
          <div className="p-4 border rounded shadow-sm bg-light">
            <b className="d-block mb-2">Total Amount: ₹{totalAmount.toFixed(2)}</b>
            <p className="mb-2">Tax (5%): ₹{taxAmount.toFixed(2)}</p>

            {discountAmount > 0 && (
              <p className="text-success fw-bold mb-2">
                Discount: ₹{discountAmount.toFixed(2)}
              </p>
            )}

            <p className="fw-bold mb-3 text-primary">
              Net Amount: ₹{netAmount.toFixed(2)}
            </p>

            {/* Coupon + Email */}
            <div className="coupon-section mb-3">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="form-control mb-2"
              />
              <button
                className="btn btn-outline-success w-100 btn-sm mb-2"
                onClick={handleApplyCoupon}
              >
                Apply Coupon
              </button>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-2"
              />

              <div className="quick-discount-buttons d-flex gap-2">
                <button
                  className="btn discount10 flex-fill btn-sm"
                  onClick={() => handleQuickDiscount(10)}
                >
                  10%
                </button>
                <button
                  className="btn discount20 flex-fill btn-sm"
                  onClick={() => handleQuickDiscount(20)}
                >
                  20%
                </button>
                <button
                  className="btn discount30 flex-fill btn-sm"
                  onClick={() => handleQuickDiscount(30)}
                >
                  30%
                </button>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-3">
              <h5>Select Payment Method:</h5>
              <div className="payment-buttons d-flex gap-2 mt-2">
                <button
                  className={`btn btn-outline-primary ${
                    paymentMethod === "qr" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("qr")}
                >
                  QR
                </button>
                <button
                  className={`btn btn-outline-primary ${
                    paymentMethod === "card" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  Card
                </button>
              </div>

              {paymentMethod === "qr" && (
                <div className="qr-section mt-3 text-center">
                  <QRCode
                    value={`upi://pay?pa=sivakumar017333@axl&pn=sivakumar&am=${netAmount.toFixed(
                      2
                    )}&cu=INR`}
                    size={180}
                  />
                  <div className="mt-2">
                    <h6>Scan QR to pay ₹{netAmount.toFixed(2)}</h6>
                    <p>UPI ID: sivakumar017333@axl</p>
                  </div>
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="card-payment mt-3 p-3 border rounded bg-white shadow-sm">
                  <h6>Enter Card Details</h6>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Expiry MM/YY"
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="form-control mb-2"
                  />
                  <button className="btn btn-primary w-100">
                    Pay ₹{netAmount.toFixed(2)}
                  </button>
                </div>
              )}
            </div>

           {user ? (
                <button
                  className="btn bg-success mt-3 text-warning w-100"
                  onClick={handlePurchase}
                >
                  Complete Purchase
                </button>
              ) : (
                <button
                  className="btn bg-warning mt-3 text-dark w-100"
                  onClick={() => navigate("/signup")}
                >
                  Login / Signup to Continue 🔐
                </button>
              )}
          </div>
        </div>

      </div>

    </div>
  );
}

export default Cart;
