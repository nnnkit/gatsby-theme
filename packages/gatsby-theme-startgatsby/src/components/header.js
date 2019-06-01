import React from "react";
import { Link } from "gatsby";

export default function header() {
  return (
    <header className="header header-secondary">
      <div className="container">
        <nav className="nav flex-between">
          <Link to="/" className="logo">
            <h3>Grid Blog</h3>
          </Link>
          <ul className="flex-between nav__menu">
            <li className="nav__items">
              <a className="nav__link" href="/">
                Home
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__link" href="/about">
                About us
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__link" href="/services">
                Services
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__link" href="/gallery">
                Gallery
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__link" href="/contact">
                Contact us
              </a>
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
