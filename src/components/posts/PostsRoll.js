import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import PostCard from './PostCard';

export default function PostsRoll({ projects }) {
  return (
    <ul className="columns is-mobile is-multiline projects-list">
      {projects?.edges.map(({ node: post }) => (
        <PostCard post={post} key={v4()} />
      ))}
    </ul>
  );
}

PostsRoll.propTypes = {
  projects: PropTypes.object.isRequired,
};
