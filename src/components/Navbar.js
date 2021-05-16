import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { v4 } from "uuid";
import NavItem from "./NavItem";
import facebook from "../img/social/facebook.svg";
import logo from "../img/logo.svg";
import { navigationItems, NAVBAR } from "../constants/navigationItems";

function Navbar({ facebookUrl, location }) {
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
            <img src={logo} alt="Fundacja Laboro" className="navbar-item-logo" />
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
              .filter(({ destinations }) => destinations.includes(NAVBAR))
              .map((item) => (
                <NavItem item={item} location={location} key={v4()} />
              ))}
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={facebook} alt="facebook" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
