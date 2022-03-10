import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">Location</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
      <div>
        <Link to="/payment">Payment</Link>
      </div>
    </div>
  );
}
