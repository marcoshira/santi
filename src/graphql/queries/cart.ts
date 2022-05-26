import { gql } from 'graphql-request';
import { GQL_FRAGMENT_CART } from '../fragments/cart';

export const GQL_GET_CART_ID = gql`
  query GET_CART_ID($userID: ID!) {
    carts(filters: { user: { id: { eq: $userID } } }) {
      data {
        id
      }
    }
  }
`;

export const GQL_GET_PRODUCTS = gql`
  ${GQL_FRAGMENT_CART}

  query GET_CART_BY_USER_ID($userID: ID!) {
    carts(filters: { user: { id: { eq: $userID } } }) {
      data {
        id
        attributes {
          ...cart
        }
      }
    }
  }
`;
