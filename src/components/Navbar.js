import React from "react";
import "./Navbar.css";
import Cart from "../cart.png";

const Navbar = ({ click }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Products <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <a href="/" className="btn btn-warning">
              Login
            </a>

            <a href="/">
              <img id="cart-icon" src={Cart} alt="cart" />
            </a>
            <p id="cart-total">{click}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
