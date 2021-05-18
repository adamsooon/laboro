import React from 'react'
import PropTypes from 'prop-types'
import SinglePostTemplate from "../../components/posts/SinglePostTemplate";

const PostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <SinglePostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      isProjectFinished={entry.getIn(['data', 'isProjectFinished'], false)}
    />
  )
}

PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PostPreview
