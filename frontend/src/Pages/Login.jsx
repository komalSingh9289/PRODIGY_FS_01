// Login.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import registerSvg from "../assets/images/register.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      login(res.data.token);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <img src={registerSvg} className="girl" />
      <div>
      <h3>Login To SecureAuth</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="input-field"
        />
        <button type="submit" className="button login-button">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <NavLink to="/register">Register here</NavLink>
      </p>
      </div>
    </div>
  );
};

export default Login;
