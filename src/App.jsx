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
  const [menuOpen, setMenuOpen] = React.useState(false);
  const cartItems = useSelector((state) => state.cart ?? []);
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // ✅ Get auth state
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth || {});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>Spicy<span>South</span></NavLink>
        </div>

        <button 
          className="navbar-toggle" 
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`navbar-collapse ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-menu">
            <li><NavLink to="/" onClick={closeMenu}>🏠 Home</NavLink></li>

            <li className="dropdown">
              <span className="dropbtn">📖 Menu ▾</span>
              <div className="dropdown-content">
                <NavLink to="/veg" onClick={closeMenu}>🥦 Veg</NavLink>
                <NavLink to="/nonveg" onClick={closeMenu}>🍗 Non-Veg</NavLink>
                <NavLink to="/drinks" onClick={closeMenu}>🥤 Drinks</NavLink>
                <NavLink to="/milkshakes" onClick={closeMenu}>🧋 Milkshakes</NavLink>
              </div>
            </li>

            <li><NavLink to="/cart" onClick={closeMenu}>🛒 Cart ({cartCount})</NavLink></li>
            <li><NavLink to="/orders" onClick={closeMenu}>🍽️ Orders</NavLink></li>
            <li><NavLink to="/aboutus" onClick={closeMenu}>ℹ️ About Us</NavLink></li>
            <li><NavLink to="/contactus" onClick={closeMenu}>📞 Contact Us</NavLink></li>
          </ul>

          <div className="navbar-actions">
            {!isAuthenticated ? (
              <>
                <NavLink to="/signup" onClick={closeMenu}><button className="btn signup">Sign Up</button></NavLink>
                <NavLink to="/login" onClick={closeMenu}><button className="btn login">🔑 Login</button></NavLink>
              </>
            ) : (
              <div className="d-flex align-items-center gap-2 user-welcome-box">
                <span className="welcome text-white">Welcome, {currentUser?.userName || "User"} 👋</span>
                <button className="btn logout bg-warning" onClick={handleLogout}>
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
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
