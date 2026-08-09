// import React, { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Login.css"; 
// import { useSelector, useDispatch } from "react-redux";
// import { loginUser } from "./store";

// function Login() {
//   const userRef = useRef(null);
//   const passwordRef = useRef(null);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { isAuthenticate, loginError: reduxLoginError } = useSelector((state) => state.auth);

//   const [userNameError, setUserNameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [loginError, setLoginError] = useState("");

//   useEffect(() => {
//     if (isAuthenticate) {
//       navigate("/");
//     }
//     if (reduxLoginError) {
//       setLoginError(reduxLoginError);
//     }
//   }, [isAuthenticate, reduxLoginError, navigate]);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const userName = userRef.current.value.trim();
//     const password = passwordRef.current.value.trim();

//     // validation
//     if (!userName) {
//       setUserNameError("Enter the username");
//       userRef.current.focus();
//       return;
//     } else {
//       setUserNameError("");
//     }

//     if (!password) {
//       setPasswordError("Enter the password");
//       passwordRef.current.focus();
//       return;
//     } else {
//       setPasswordError("");
//     }

//     // dispatch login action
//     dispatch(loginUser({ userName, password }));
//   };

//   return (
//     <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card shadow p-4" style={{ width: "380px" }}>
//         <h3 className="text-center mb-4 text-success">🔑 Login</h3>

//         <form onSubmit={handleLogin}>
//           {/* Username */}
//           <div className="mb-3">
//             <label className="form-label">Username</label>
//             <input
//               type="text"
//               ref={userRef}
//               className="form-control"
//               placeholder="Enter your username"
//             />
//             {userNameError && (
//               <div className="text-danger mt-1">{userNameError}</div>
//             )}
//           </div>

//           {/* Password */}
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               ref={passwordRef}
//               className="form-control"
//               placeholder="Enter your password"
//             />
//             {passwordError && (
//               <div className="text-danger mt-1">{passwordError}</div>
//             )}
//           </div>

//           {/* Error if login fails */}
//           {loginError && <div className="text-danger mb-2">{loginError}</div>}

//           {/* Button */}
//           <button type="submit" className="btn btn-success w-100">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; 
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "./store";

function Login() {
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, loginError } = useSelector((state) => state.auth);

  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");

  // Navigate after successful login
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Home page
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const userName = userRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!userName) {
      setUserError("Enter username");
      return;
    } else setUserError("");

    if (!password) {
      setPassError("Enter password");
      return;
    } else setPassError("");

    dispatch(loginUser({ userName, password }));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Username</label>
            <input type="text" ref={userRef} className="form-control" />
            {userError && <div className="text-danger">{userError}</div>}
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" ref={passwordRef} className="form-control" />
            {passError && <div className="text-danger">{passError}</div>}
          </div>
          {loginError && <div className="text-danger mb-2">{loginError}</div>}
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
