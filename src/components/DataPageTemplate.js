import React from "react";
import PropTypes from "prop-types";
import Content from "../components/Content";

const DataPageTemplate = ({ helmet, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      {helmet || ""}
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DataPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default DataPageTemplate;
