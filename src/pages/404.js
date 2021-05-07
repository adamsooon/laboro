import React from "react";
import { Link } from 'gatsby'
import Cat from "../components/Cat";
import Layout from "../components/Layout";
import { homePageNav } from "../constants/navigationItems";

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="content has-text-centered">
              <h1 className="has-text-weight-semibold is-size-2">
                404
              </h1>
              <Cat />
              <p>Strona o podanym linku nie isnieje</p>
              <div className="column is-12 has-text-centered">
                <Link className="btn" to={homePageNav.path}>
                  Wróc do strony głównej
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
