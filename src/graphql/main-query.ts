import { graphql } from "gatsby";

export const mainQuery = () => graphql`
  query AllData {
    allContactJson {
      nodes {
        id
        logo
        link
        social
      }
    }

    allExpJson {
      nodes {
        job_type
        name
        link
        dates
        id
        role
        logo
      }
    }

    allProjectJson {
      nodes {
        id
        name
        description
        stack
        status
        github
        logo
        downloads {
          link
          type
          logo
        }
      }
    }

    allProfileJson {
      nodes {
        name
        image
        greeting
        sub_greeting
      }
    }
  }
`;
