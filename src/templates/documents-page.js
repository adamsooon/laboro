import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import DocumentsList from "../components/DocumentsList";

export function DocumentsPageTemplate({ documents, header, helmet, image }) {
  return (
    <>
      {helmet || ""}
      <Header image={image} title={header} />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="content">
                <DocumentsList documents={documents} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

DocumentsPageTemplate.propTypes = {
  documents: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  helmet: PropTypes.object,
  image: PropTypes.object.isRequired,
};

function DocumentsPage({ data, location }) {
  const {
    markdownRemark: {
      frontmatter: { documents, header, image },
    },
  } = data;

  return (
    <Layout location={location}>
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
  location: PropTypes.object.isRequired,
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
