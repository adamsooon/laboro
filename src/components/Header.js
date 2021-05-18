import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import BackgroundImage from "gatsby-background-image";

export default function Header({ image, isFixed, title, style }) {
  return (
    <BackgroundImage
      Tag={`header`}
      className={classNames("full-width-image", {
        "is-fixed": isFixed,
      })}
      fluid={!!image.childImageSharp ? image.childImageSharp.fluid : image}
    >
      <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen header-title">
        {title}
      </h1>
    </BackgroundImage>
  );
}

Header.propTypes = {
  isFixed: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Header.defaultProps = {
  isFixed: false,
};
