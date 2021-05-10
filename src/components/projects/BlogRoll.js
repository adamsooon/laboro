import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "moment/locale/pl";

export default function BlogRoll({ posts }) {
  return (
    <ul className="columns is-mobile is-multiline projects-list">
      {posts?.edges.map(({ node: post }) => (
        <li
          className="column is-half-mobile is-half-tablet is-4-widescreen projects-list-item"
          key={post.id}
        >
          <Link
            className="blog-list-item tile is-child box"
            to={post.fields.slug}
          >
            <div className="featured-thumbnail">
              {post.frontmatter.isProjectFinished && (
                <span className="project-inactive-label">
                  Projekt zakończony
                </span>
              )}
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                }}
              />
            </div>
            <div className="project-excerpt">
              <span className="project-date is-block">
                {moment(post.frontmatter.date).format("D MMMM YYYY")}
              </span>
              <h2 className="subtitle is-size-5 is-block">
                {post.frontmatter.title}
              </h2>
              <span className="btn project-btn">Czytaj</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

BlogRoll.propTypes = {
  posts: PropTypes.object.isRequired,
};
