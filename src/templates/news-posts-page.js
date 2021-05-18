import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PostsPage from "../components/posts/PostsPage";

export default function NewsIndexPage({ data, location }) {
  return (
    <PostsPage title="Aktualności" data={data} location={location} />
  );
}

NewsIndexPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query BlogIndexPage($skip: Int!, $limit: Int = 10) {
    image: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2048) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "news-post" } } }
      limit: $limit
      skip: $skip
    ) {
      ...PostsList
    }
  }
`;
