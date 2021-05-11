import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "gatsby";

export default function NavItem({ item, location }) {
  const { isStaticLink, name, path } = item;
  if (isStaticLink) {
    return (
      <a
        href={path}
        target="_blank"
        rel="noreferrer noopener"
        className="navbar-item"
      >
        {name}
      </a>
    );
  }
  return (
    <Link
      className={classNames("navbar-item", {
        "is-active": location?.pathname === path,
      })}
      to={path}
    >
      {name}
    </Link>
  );
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  location: PropTypes.object
}
