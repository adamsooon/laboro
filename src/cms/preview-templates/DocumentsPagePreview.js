import React from "react";
import PropTypes from "prop-types";
import { DocumentsPageTemplate } from "../../templates/documents-page";

const DocumentsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <DocumentsPageTemplate
      documents={data.documents}
      image={getAsset(data.image)}
      header={data.header}
    />
  );
};
DocumentsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default DocumentsPagePreview;
