import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PostsPage from "../components/posts/PostsPage";

export default function NewsIndexPage({ data, pageContext }) {
  return (
    <PostsPage
      title="Aktualności"
      data={data}
      paginationData={pageContext}
    />
  );
}

NewsIndexPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`query BlogIndexPage($skip: Int!, $limit: Int = 10) {
  image: file(relativePath: {eq: "header.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  projects: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {frontmatter: {templateKey: {eq: "news-post"}}}
    limit: $limit
    skip: $skip
  ) {
    ...PostsList
  }
}
`;
