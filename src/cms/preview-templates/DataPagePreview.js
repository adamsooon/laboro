import React from 'react'
import PropTypes from 'prop-types'
import DataPageTemplate from '../../components/DataPageTemplate'

const DataPagePreview = ({ entry, widgetFor }) => (
  <DataPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

DataPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DataPagePreview