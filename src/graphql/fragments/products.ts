import { gql } from 'graphql-request';

export const GQL_FRAGMENT_PRODUCT = gql`
  fragment product on Product {
    name
    description
    price
    stock
    cover {
      data {
        attributes {
          url
        }
      }
    }
    product_type {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
