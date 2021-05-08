import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "moment/locale/pl";

export default class BlogRoll extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="columns is-multiline">
        {posts.edges &&
          posts.edges.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4 is-block"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span className="subtitle is-size-5 is-block">
                      {moment(post.frontmatter.date).format("D MMMM YYYY")}
                    </span>
                  </p>
                </header>
                <p>{post.excerpt}</p>
                <Link className="button" to={post.fields.slug}>
                  Czytaj dalej
                </Link>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  posts: PropTypes.object.isRequired
};
