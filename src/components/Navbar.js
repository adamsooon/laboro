import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

function Navbar({ location }) {
  const [isActive, setActive] = useState(false);

  const toggleHamburger = useCallback(() => {
    setActive(!isActive);
  }, [isActive]);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            aria-label="menu"
            aria-expanded="false"
            className={classNames("navbar-burger burger button", {
              "is-active": isActive,
            })}
            data-target="navMenu"
            onClick={toggleHamburger}
            onKeyDown={toggleHamburger}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div
          id="navMenu"
          className={classNames("navbar-menu", {
            "is-active": isActive,
          })}
        >
          <div className="navbar-start has-text-centered">
            <Link
              className={classNames("navbar-item", {
                "is-active": location && location.pathname === '/',
              })}
              to="/"
            >
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
