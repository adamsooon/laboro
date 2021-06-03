import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import IndexPageTemplate from '../templates/IndexPageTemplate';

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        projects={data.projects}
        news={data.news}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate($limit: Int = 3) {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
      limit: $limit
    ) {
      ...PostsList
    }
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "news-post" } } }
      limit: $limit
    ) {
      ...PostsList
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`;
