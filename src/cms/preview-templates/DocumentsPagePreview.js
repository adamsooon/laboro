import React from "react";
import PropTypes from "prop-types";
import { DocumentsPageTemplate } from "../../templates/documents-page";

const DocumentsPagePreview = ({ entry, widgetFor }) => (
  <DocumentsPageTemplate
    documents={entry.getIn(["data", "documents"]).toJS()}
  />
);
DocumentsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default DocumentsPagePreview;
