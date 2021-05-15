import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import ProjectsRoll from "../components/projects/ProjectsRoll";

export default function ProjectIndexPage({ data, location }) {
  return (
    <Layout location={location}>
      <Helmet titleTemplate="%s | Realizowane projekty" />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/projects-bg.jpg')`,
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
          Projekty
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <ProjectsRoll projects={data.projects} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

ProjectIndexPage.propTypes = {
  data: PropTypes.object,
  helmet: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query BlogIndexPage($skip: Int!, $limit: Int = 10) {
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
