import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Layout from "../Layout";
import Header from "../Header";
import PostsRoll from "./PostsRoll";

export default function PostsPage({ data, location, title }) {
  return (
    <Layout location={location}>
      <Helmet titleTemplate={`%s | ${title}`} />
      <Header image={data.image} title={title} />
      <section className="section">
        <div className="container">
          <div className="content">
            <PostsRoll projects={data.projects} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

PostsPage.propTypes = {
  data: PropTypes.object,
  helmet: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string,
};
