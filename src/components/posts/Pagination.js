import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export default function Pagination({ paginationData }) {
  const { currentPage, numPages, slug } = paginationData;
  if (numPages === 1) {
    return null;
  }
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="paginacja"
    >
      <ul className="pagination-list">
        {Array.from({ length: numPages }, (_, i) => (
          <Link
            className={classNames("pagination-link", {
              "is-current": currentPage === i + 1,
            })}
            key={`pagination-number${i + 1}`}
            to={`/${slug}/${i === 0 ? "" : i + 1}`}
            aria-label={`idź do strony ${i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  paginationData: PropTypes.object.isRequired,
};
