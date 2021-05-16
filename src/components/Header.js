import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Header({ image, isFixed, title }) {
  return (
    <header
      className={classNames("full-width-image", {
        "is-fixed": isFixed,
      })}
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.srcWebp : image
        })`,
      }}
    >
      <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen header-title">
        {title}
      </h1>
    </header>
  );
}

Header.propTypes = {
  isFixed: PropTypes.bool,
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  isFixed: false,
};
