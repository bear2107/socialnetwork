import React from "react";
import { Link } from "react-router-dom";
import Landing from "./Landing";
const Navbar = () => {
  return (
    <nav class="navbar bg-dark">
      <h1>
        <Link to="index.html" />
        <i class="fas fa-code" /> DevConnector
      </h1>
      <ul>
        <li>
          <Link to="profiles.html">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
