import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import DocumentsList from "../components/DocumentsList";

export default function DocumentsPageTemplate({
  documents,
  header,
  helmet,
  image,
}) {
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
