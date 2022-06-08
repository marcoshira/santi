import { gql } from 'graphql-request';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';
import { GQL_FRAGMENT_PURCHASE } from '../fragments/purchase';

export const GQL_CREATE_PURCHASE = gql`
  ${GQL_FRAGMENT_PRODUCT}

  mutation PURCHASE($userID: ID!, $Items: [ComponentPurchaseItemsInput]) {
    createPuchase(data: { user: $userID, Item: $Items }) {
      data {
        id
        attributes {
          user {
            data {
              id
              attributes {
                username
                email
              }
            }
          }
          Item {
            id
            Quantity
            product {
              data {
                id
                attributes {
                  ...product
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;

export const GQL_UPDATE_PURCHASE = gql`
  ${GQL_FRAGMENT_PURCHASE}
  ${GQL_FRAGMENT_PRODUCT}

  mutation UPDATE_PURCHASE($id: ID!, $purchase: PuchaseInput!) {
    updatePuchase(id: $id, data: $purchase) {
      data {
        id
        attributes {
          ...purchase
        }
      }
    }
  }
`;
