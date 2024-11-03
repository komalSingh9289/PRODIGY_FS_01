import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import registerSvg from "../assets/images/register.svg";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the inputs as user types
    validateInputs(name, value);
  };

  const validateInputs = (name, value) => {
    let error = "";

    // Email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Please enter a valid email address (e.g., example@domain.com)";
      }
    }

    // Password validation
    if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(value)) {
        error =
          "Password must be at least 8 characters long, with 1 uppercase, 1 lowercase, 1 number, and 1 special character";
      }
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors before submitting
    if (
      !formData.email ||
      !formData.password ||
      !formData.firstname ||
      !formData.lastname
    ) {
      setErrors({
        ...errors,
        email: formData.email ? "" : "Email is required",
        password: formData.password ? "" : "Password is required",
        firstname: formData.firstname ? "" : "First Name is required",
        lastname: formData.lastname ? "" : "Last Name is required",
      });
      return;
    }

    try {
      // Send data to the server if valid
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      if (res.ok) {
        login(res.data.token);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });

        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
    
      <div className="container">
      <img src={registerSvg} className="girl" />
      <div>
        <h3>Register To SecureAuth</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="input-field"
          />
          {errors.firstname && (
            <p className="error-message">{errors.firstname}</p>
          )}{" "}
          {/* Error message for firstname */}
          <input
            type="text"
            placeholder="Your lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="input-field"
          />
          {errors.lastname && (
            <p className="error-message">{errors.lastname}</p>
          )}{" "}
          {/* Error message for lastname */}
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}{" "}
          {/* Error message for email */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}{" "}
          {/* Error message for password */}
          <button type="submit" className="button register-button">
            Register
          </button>
        </form>
        <p>
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </p>
        </div>
      </div>
    </>
  );
};

export default Register;
