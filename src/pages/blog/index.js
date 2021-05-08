import React from "react";
import PropTypes from "prop-types";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/blog/BlogRoll";

export default function BlogIndexPage({ data, location }) {
  return (
    <Layout location={location}>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
            backgroundColor: "#f40",
            color: "white",
            padding: "1rem",
          }}
        >
          Latest Stories
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll posts={data.posts} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

BlogIndexPage.propTypes = {
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query BlogIndexPage($limit: Int = 10) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
    ) {
      ...PostsList
    }
  }
`;
