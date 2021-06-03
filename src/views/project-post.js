import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SinglePostTemplate from "../components/posts/SinglePostTemplate";
import { HTMLContent } from "../components/Content";
import useSiteMetadata from "../components/SiteMetadata";

const ProjectPost = ({ data, location }) => {
  const { domain } = useSiteMetadata();
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SinglePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        isProjectFinished={post.frontmatter.isProjectFinished}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        postUrl={`${domain}${post.fields.slug}`}
      />
    </Layout>
  );
};

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  location: PropTypes.object,
};

export default ProjectPost;

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        isProjectFinished
      }
    }
  }
`;
