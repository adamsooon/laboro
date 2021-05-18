import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import Content from "../Content";

export default function SinglePostTemplate({
  isProjectFinished,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  postUrl,
}) {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="project-head">
              {isProjectFinished && (
                <span className="tag is-medium">Projekt Zakończony</span>
              )}
              <iframe
                className="project-share"
                src={`https://www.facebook.com/plugins/share_button.php?href=${postUrl}%2F&layout=button&size=large&width=77&height=28&appId`}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
                title="Udostępnij projekt na facebooku"
              />
            </div>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

SinglePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  postUrl: PropTypes.string,
  helmet: PropTypes.object,
  isProjectFinished: PropTypes.bool,
};
