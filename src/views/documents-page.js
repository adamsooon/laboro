import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import DocumentsPageTemplate from "../templates/DocumentsPageTemplate";

function DocumentsPage({ data }) {
  const {
    markdownRemark: {
      frontmatter: { documents, header, image },
    },
  } = data;

  return (
    <Layout>
      <DocumentsPageTemplate
        documents={documents}
        image={image}
        header={header}
        helmet={<Helmet titleTemplate="%s | Dokumenty do pobrania" />}
      />
    </Layout>
  );
}

DocumentsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DocumentsPage;

export const pageQuery = graphql`
  query DocumentsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "documents-page" } }) {
      frontmatter {
        header
        image {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        documents {
          file {
            publicURL
          }
          documentName
        }
      }
    }
  }
`;
