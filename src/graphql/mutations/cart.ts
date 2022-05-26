import { gql } from 'graphql-request';
import { GQL_FRAGMENT_CART } from '../fragments/cart';

export const GQL_CREATE_CART = gql`
  ${GQL_FRAGMENT_CART}

  mutation CREATE_CART($prodIDs: [ID], $userID: ID!) {
    createCart(data: { products: $prodIDs, user: $userID }) {
      data {
        id
        attributes {
          ...cart
        }
      }
    }
  }
`;

export const GQL_UPDATE_CART = gql`
  ${GQL_FRAGMENT_CART}

  mutation UPDATE_CART($cartID: ID!, $productsIDS: [ID]) {
    updateCart(id: $cartID, data: { products: $productsIDS }) {
      data {
        id
        attributes {
          ...cart
        }
      }
    }
  }
`;
