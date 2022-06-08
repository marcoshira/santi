import { gql } from 'graphql-request';
import { GQL_FRAGMENT_CART } from '../fragments/cart';
import { GQL_FRAGMENT_FAVORITE } from '../fragments/favorite';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';
import { GQL_FRAGMENT_PURCHASE } from '../fragments/purchase';
import { GQL_FRAGMENT_USER } from '../fragments/user';

export const GQL_GET_USER_BY_ID = gql`
  ${GQL_FRAGMENT_USER}
  ${GQL_FRAGMENT_CART}
  ${GQL_FRAGMENT_FAVORITE}
  ${GQL_FRAGMENT_PURCHASE}
  ${GQL_FRAGMENT_PRODUCT}

  query GET_USER_BY_ID($userID: ID!) {
    usersPermissionsUser(id: $userID) {
      data {
        id
        attributes {
          ...user
        }
      }
    }
  }
`;
