import { gql } from 'graphql-request';
import { GQL_FRAGMENT_FAVORITE } from '../fragments/favorite';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';

export const GQL_CREATE_FAVORITE = gql`
  ${GQL_FRAGMENT_FAVORITE}
  ${GQL_FRAGMENT_PRODUCT}

  mutation FAVORITE($userID: ID!, $products: [ID]) {
    createFavorite(
      data: { users_permissions_user: $userID, products: $products }
    ) {
      data {
        id
        attributes {
          ...favorite
        }
      }
    }
  }
`;

export const GQL_UPDATE_FAVORITE = gql`
  ${GQL_FRAGMENT_FAVORITE}
  ${GQL_FRAGMENT_PRODUCT}

  mutation UPDATE_FAVORITE($id: ID!, $favoriteInp: FavoriteInput!) {
    updateFavorite(id: $id, data: $favoriteInp) {
      data {
        id
        attributes {
          ...favorite
        }
      }
    }
  }
`;
