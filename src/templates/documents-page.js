import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const DocumentsPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Dokumenty
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DocumentsPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DocumentsPage = ({ data, location }) => {
  const { markdownRemark: post } = data;
  console.log(data);

  return (
    <Layout location={location}>
      <DocumentsPageTemplate
        contentComponent={HTMLContent}
        // title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

DocumentsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DocumentsPage;

export const pageQuery = graphql`
  query DocumentsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "documents-page" } }) {
      frontmatter {
        documentsList {
          file {
            id
          }
          documentName
        }
      }
    }
  }
`;
