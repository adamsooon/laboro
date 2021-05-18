import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "moment/locale/pl";

export default function PostCard({ post }) {
  const renderPostImage = () => (
    <div className="featured-thumbnail">
      {post.frontmatter.isProjectFinished && (
        <span className="project-inactive-label">Projekt zakończony</span>
      )}
      <PreviewCompatibleImage
        imageInfo={{
          image: post.frontmatter.featuredimage,
          alt: `Zdjęcie dla postu ${post.frontmatter.title}`,
        }}
      />
    </div>
  );
  return (
    <li className="column is-full-mobile is-half-tablet is-4-widescreen projects-list-item">
      <Link className="blog-list-item tile is-child box" to={post.fields.slug}>
        {post.frontmatter.featuredimage && renderPostImage()}
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
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
