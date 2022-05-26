import { gql } from 'graphql-request';
import { GQL_FRAGMENT_PRODUCT } from './products';
import { GQL_FRAGMENT_USER } from './user';

export const GQL_FRAGMENT_CART = gql`
  ${GQL_FRAGMENT_PRODUCT}
  ${GQL_FRAGMENT_USER}
  fragment cart on Cart {
    products {
      data {
        id
        attributes {
          ...product
        }
      }
    }
    user {
      data {
        id
        attributes {
          ...user
        }
      }
    }
  }
`;
