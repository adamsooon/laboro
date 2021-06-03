import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Header from "../components/Header";
import PostRoll from "../components/posts/PostsRoll";

export default function IndexPageTemplate({
  image,
  title,
  mainpitch,
  news,
  projects,
}) {
  return (
    <div>
      <Header image={image} title={title} isFixed />
      <section className="section main-section">
        <div className="container">
          <div className="column is-12">
            <div className="content">
              <h1 className="has-text-weight-semibold is-size-2 has-text-centered">
                {mainpitch.title}
              </h1>
              <div className="tile">
                <p className="short-description">{mainpitch.description}</p>
              </div>
            </div>
            <div className="column is-12 has-text-centered">
              <Link
                className="btn"
                to="/o-nas"
                aria-label="Zobacz więcej informacji o nas"
              >
                Zobacz więcej o nas
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section projects">
        <div className="container">
          <div className="column is-12">
            <div className="content">
              <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                Najnowsze aktualności
              </h3>
              <PostRoll projects={news} />
              <div className="column is-12 has-text-centered">
                <Link
                  className="btn"
                  to="/aktualnosci"
                  aria-label="Zobacz więcej aktualności"
                >
                  Zobacz więcej
                </Link>
              </div>
              <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                Ostatnio dodane projekty
              </h3>
              <PostRoll projects={projects} />
              <div className="column is-12 has-text-centered">
                <Link
                  className="btn"
                  to="/projekty"
                  aria-label="Zobacz więcej realizowanych projektów"
                >
                  Zobacz więcej
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  projects: PropTypes.object,
  news: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  })
};
