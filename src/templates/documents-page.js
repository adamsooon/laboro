import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import DocumentsList from "../components/DocumentsList";

export function DocumentsPageTemplate({ documents, header, image }) {
  return (
    <>
      <header
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #f4792b, -0.5rem 0 0 #f4792b",
            backgroundColor: "#f4792b",
            color: "white",
            padding: "1rem",
          }}
        >
          {header}
        </h1>
      </header>
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
              ...GatsbyImageSharpFluid
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
