const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    const projects = posts.filter(post => post.node.frontmatter.templateKey === 'project-post');
    const news = posts.filter(post => post.node.frontmatter.templateKey === 'news-post');

    posts.forEach((edge) => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/views/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    const postsPerPage = 6;
    const projectsNumPages = Math.ceil(projects.length / postsPerPage);
    const newsNumPages = Math.ceil(news.length / postsPerPage);
    
    Array.from({ length: projectsNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/projekty` : `/projekty/${i + 1}`,
        component: path.resolve("./src/views/project-posts-page.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: projectsNumPages,
          currentPage: i + 1,
          slug: 'projekty'
        },
      });
    });
    Array.from({ length: newsNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/aktualnosci` : `/aktualnosci/${i + 1}`,
        component: path.resolve("./src/views/news-posts-page.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: newsNumPages,
          currentPage: i + 1,
          slug: 'aktualnosci'
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/views/tags.js`),
        context: {
          tag,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
