import { gql } from 'graphql-request';

export const GQL_FRAGMENT_PURCHASE = gql`
  fragment purchase on Puchase {
    Item {
      id
      Quantity
      date
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
