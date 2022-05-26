import { gql } from 'graphql-request';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';

export const GQL_GET_PURCHASE_BY_ID = gql`
  ${GQL_FRAGMENT_PRODUCT}

  query GET_PURCHASE_BY_ID($purchaseID: ID!) {
    puchase(id: $purchaseID) {
      data {
        id
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

export const GQL_GET_PURCHASE_ID = gql`
  query GET_PURCHASE_ID($userID: ID!) {
    usersPermissionsUser(id: $userID) {
      data {
        attributes {
          puchase {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const GQL_GET_PURCHASE_BY_USER_ID = gql`
  ${GQL_FRAGMENT_PRODUCT}

  query GET_PURCHASE_BY_USER_ID($userID: ID!) {
    usersPermissionsUser(id: $userID) {
      data {
        attributes {
          puchase {
            data {
              id
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
      }
    }
  }
`;
