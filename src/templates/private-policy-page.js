import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import DataPageTemplate from "../components/DataPageTemplate";
import { HTMLContent } from "../components/Content";

function PrivatePolicyPage({ data, location }) {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <DataPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        helmet={<Helmet titleTemplate="%s | Polityka Prywatności" />}
      />
    </Layout>
  );
}

PrivatePolicyPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default PrivatePolicyPage;

export const PrivatePolicyPageQuery = graphql`
  query PrivatePolicyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
