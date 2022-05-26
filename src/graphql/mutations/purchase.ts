import { gql } from 'graphql-request';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';

export const GQL_CREATE_PURCHASE = gql`
  ${GQL_FRAGMENT_PRODUCT}

  mutation CREATE_PURCHASE(
    $userID: ID!
    $Items: [ComponentPurchaseItemsInput]
  ) {
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
  ${GQL_FRAGMENT_PRODUCT}

  mutation UPDATE_PURCHASE(
    $purchaseID: ID!
    $Items: [ComponentPurchaseItemsInput]
  ) {
    updatePuchase(id: $purchaseID, data: { Item: $Items }) {
      data {
        attributes {
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
      }
    }
  }
`;
