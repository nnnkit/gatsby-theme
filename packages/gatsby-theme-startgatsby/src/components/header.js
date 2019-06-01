import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header className="header header-secondary">
      <div className="container">
        <nav className="nav flex-between">
          <Link to="/" className="logo">
            <h3>Grid Blog</h3>
          </Link>
          <ul className="flex-between nav__menu">
            <li className="nav__items">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="nav__items">
              <Link className="nav__link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="toggle">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
        </nav>
      </div>
    </header>
  );
}
