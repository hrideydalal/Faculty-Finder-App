import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", { email, password })
      .then((res) => {
        alert("Login successful!");
        navigate("/home");
      })
      .catch((err) => {
        alert("Invalid email or password");
        console.error(err);
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "300px", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;
