import React from "react";
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Drinks from "./Drinks";
import Milkshakes from "./Milkshakes";
import Cart from "./Cart";
import Orders from "./Orders";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import NotFound from "./NotFound";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import { logoutUser } from "./store";
import "./App.css";

function App() {
  const cartItems = useSelector((state) => state.cart ?? []);
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // ✅ Get auth state
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth || {});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/home">Spicy<span>South</span></NavLink>
        </div>

        <ul className="navbar-menu">
          <li><NavLink to="/">🏠 Home</NavLink></li>

          <li className="dropdown">
            <span className="dropbtn">📖 Menu ▾</span>
            <div className="dropdown-content">
              <NavLink to="/veg">🥦 Veg</NavLink>
              <NavLink to="/nonveg">🍗 Non-Veg</NavLink>
              <NavLink to="/drinks">🥤 Drinks</NavLink>
              <NavLink to="/milkshakes">🧋 Milkshakes</NavLink>
            </div>
          </li>

          <li><NavLink to="/cart">🛒 Cart ({cartCount})</NavLink></li>
          <li><NavLink to="/orders">🍽️ Orders</NavLink></li>
          <li><NavLink to="/aboutus">ℹ️ About Us</NavLink></li>
          <li><NavLink to="/contactus">📞 Contact Us</NavLink></li>
        </ul>

        <div className="navbar-actions">
          {!isAuthenticated ? (
            <>
              <NavLink to="/signup"><button className="btn signup">Sign Up</button></NavLink>
              <NavLink to="/login"><button className="btn login">🔑 Login</button></NavLink>
            </>
          ) : (
            <>
              <p className="welcome text-white">Welcome, {currentUser?.userName || "User"} 👋</p>
              <button className="btn logout mt-2 mb-2 bg-warning" onClick={handleLogout}>
                🚪 Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/milkshakes" element={<Milkshakes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// ✅ Wrap App with BrowserRouter outside
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
