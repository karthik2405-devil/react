import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div>
    <h1>Welcome to Our Plant Store</h1>
    <p>Your one-stop shop for beautiful plants!</p>
    <Link to="/products">Get Started</Link>
  </div>
);

export default LandingPage;