import React from "react";
import "../styles/components/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <details>
      <summary></summary>
      <nav class="menu">
        <Link to="/">Home</Link>
        <a href="#link">Work</a>
        <a href="#link">Links</a>
        <a href="#link">Contact</a>
        <Link to="about">About</Link>
      </nav>
    </details>
  );
};

export default Navbar;
