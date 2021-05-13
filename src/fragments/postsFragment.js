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
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date
          isProjectFinished
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 435, maxHeight: 245, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
