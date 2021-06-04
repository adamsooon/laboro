import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PostsPage from "../components/posts/PostsPage";

export default function ProjectIndexPage({ data, pageContext }) {
  return (
    <PostsPage
      title="Realizowane Projekty"
      data={data}
      paginationData={pageContext}
    />
  );
}

ProjectIndexPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query ProjectIndexPage($skip: Int!, $limit: Int!) {
    image: file(relativePath: { eq: "projects-bg.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
      limit: $limit
      skip: $skip
    ) {
      ...PostsList
    }
  }
`;
