import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Layout from "../Layout";
import Header from "../Header";
import PostsRoll from "./PostsRoll";
import Pagination from "./Pagination";

export default function PostsPage({ data, title, paginationData }) {
  return (
    <Layout>
      <Helmet titleTemplate={`%s | ${title}`} />
      <Header image={data.image} title={title} />
      <section className="section">
        <div className="container">
          <div className="content">
            <PostsRoll projects={data.projects} />
            <Pagination paginationData={paginationData} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

PostsPage.propTypes = {
  data: PropTypes.object,
  helmet: PropTypes.object,
  title: PropTypes.string,
};
