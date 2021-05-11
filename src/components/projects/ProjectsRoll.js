import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ProjectCard from './ProjectCard';

export default function ProjectsRoll({ projects }) {
  return (
    <ul className="columns is-mobile is-multiline projects-list">
      {projects?.edges.map(({ node: post }) => (
        <ProjectCard post={post} key={v4()} />
      ))}
    </ul>
  );
}

ProjectsRoll.propTypes = {
  projects: PropTypes.object.isRequired,
};
