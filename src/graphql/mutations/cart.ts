import { gql } from 'graphql-request';
import { GQL_FRAGMENT_CART } from '../fragments/cart';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';

export const GQL_CREATE_CART = gql`
  ${GQL_FRAGMENT_CART}
  ${GQL_FRAGMENT_PRODUCT}

  mutation CARTQUANT(
    $cart: [ComponentCartQuantityCartQuantityInput]
    $userID: ID!
  ) {
    createCartQuantity(
      data: { cartQuantity: $cart, users_permissions_user: $userID }
    ) {
      data {
        id
        attributes {
          ...quant
        }
      }
    }
  }
`;

export const GQL_UPDATE_CART = gql`
  ${GQL_FRAGMENT_CART}
  ${GQL_FRAGMENT_PRODUCT}

  mutation UPDATE_CARTQUANT($id: ID!, $cartQuant: CartQuantityInput!) {
    updateCartQuantity(id: $id, data: $cartQuant) {
      data {
        id
        attributes {
          ...quant
        }
      }
    }
  }
`;
