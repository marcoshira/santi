import { gql } from 'graphql-request';

export const GQL_FRAGMENT_FAVORITE = gql`
  fragment favorite on Favorite {
    products {
      data {
        id
        attributes {
          ...product
        }
      }
    }
  }
`;
