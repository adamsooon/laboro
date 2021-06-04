import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export default function NavItem({ item }) {
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
      className="navbar-item"
      activeClassName="is-active"
      to={path}
    >
      {name}
    </Link>
  );
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
}
