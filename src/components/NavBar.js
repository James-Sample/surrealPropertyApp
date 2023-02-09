import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <img className="logoPic" src="/HousePic.png" alt="housepic" />
        <h2 className="title">Surreal Estate</h2>
        <ul className="navbar-links">
          <li className="navbar-links-item">
            <Link to="/">View Properties</Link>
          </li>
          <li className="navbar-links-item">
            <Link to="add-property">Add a Property</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
