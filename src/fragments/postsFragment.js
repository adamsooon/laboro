import { graphql } from "gatsby";

export const PostsFragment = graphql`fragment PostsList on MarkdownRemarkConnection {
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
            gatsbyImageData(
              width: 435
              height: 245
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
}
`;
