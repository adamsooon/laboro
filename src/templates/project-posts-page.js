import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import ProjectsRoll from "../components/projects/ProjectsRoll";

export default function ProjectIndexPage({ data, location }) {
  return (
    <Layout location={location}>
      <Helmet titleTemplate="%s | Realizowane projekty" />
      <Header image="img/projects-bg.jpg" title="Projekty" />
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
