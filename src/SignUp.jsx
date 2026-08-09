import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { registerUser } from "./store";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = watch("password");

  function handleSignup(data) {
    // ✅ Don’t save confirmPassword in Redux
    const { userName, email, password } = data;
    dispatch(registerUser({ userName, email, password }));
    navigate("/login");
  }

  return (
    <div className="signup-container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 rounded-4 signup-card">
        <h2 className="text-center text-success mb-4">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignup)}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className={`form-control ${errors.userName ? "is-invalid" : ""}`}
              placeholder="Enter username"
              {...register("userName", { required: "User name is required" })}
            />
            {errors.userName && (
              <div className="invalid-feedback">{errors.userName.message}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email address",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-success w-100 fw-bold shadow-sm"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center mt-3">
            Already have an account?{" "}
            <span
              role="button"
              className="text-primary text-decoration-underline fw-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
