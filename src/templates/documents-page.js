import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import DocumentsList from "../components/DocumentsList";


export function DocumentsPageTemplate({ documents }) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="content">
              <h1 className="has-text-weight-semibold is-size-2 has-text-centered">
                Dokumenty
              </h1>
              <DocumentsList documents={documents} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DocumentsPageTemplate.propTypes = {
  documents: PropTypes.array.isRequired,
};

function DocumentsPage({ data, location }) {
  const {
    markdownRemark: {
      frontmatter: { documents },
    },
  } = data;

  return (
    <Layout location={location}>
      <DocumentsPageTemplate documents={documents} />
    </Layout>
  );
};

DocumentsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default DocumentsPage;

export const pageQuery = graphql`
  query DocumentsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "documents-page" } }) {
      frontmatter {
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
