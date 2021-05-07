import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { v4 } from 'uuid'
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import { navigationItems } from "../constants/navigationItems";

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
            {navigationItems
              .filter((item) => item.isHeaderItem)
              .map(({ name, path }) => (
                <Link
                  className={classNames("navbar-item", {
                    "is-active": location?.pathname === path,
                  })}
                  to={path}
                  key={v4()}
                >
                  {name}
                </Link>
              ))}
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
