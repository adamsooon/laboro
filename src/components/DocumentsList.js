import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const DocumentsList = ({ documents }) => (
  <ul className="documents-list">
    {documents.map(
      ({ file, documentName }) =>
        file &&
        documentName && (
          <li key={v4()}>
            <a
              className="document-link"
              href={file.publicURL}
              target="_blank"
              rel="noreferrer noopener"
            >
              {documentName}
            </a>
          </li>
        )
    )}
  </ul>
);

DocumentsList.propTypes = {
  documents: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.object,
      documentName: PropTypes.string,
    })
  ).isRequired,
};

export default DocumentsList;
