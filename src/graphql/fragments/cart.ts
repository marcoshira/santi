import { gql } from 'graphql-request';

export const GQL_FRAGMENT_CART = gql`
  fragment quant on CartQuantity {
    cartQuantity {
      id
      quantity
      product {
        data {
          id
          attributes {
            ...product
          }
        }
      }
    }
  }
`;
