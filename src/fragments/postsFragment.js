import { graphql } from "gatsby";

export const PostsFragment = graphql`
  fragment PostsList on MarkdownRemarkConnection {
    pageInfo {
      pageCount
      currentPage
      hasPreviousPage
      itemCount
      hasNextPage
    }
    edges {
      node {
        excerpt(pruneLength: 200)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date
          featuredpost
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
