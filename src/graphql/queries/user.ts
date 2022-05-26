import { gql } from 'graphql-request';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';

export const GQL_GET_USER_BY_ID = gql`
  ${GQL_FRAGMENT_PRODUCT}

  query GET_USER_BY_ID($userID: ID!) {
    usersPermissionsUser(id: $userID) {
      data {
        id
        attributes {
          username
          email
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
          cart {
            data {
              id
              attributes {
                products {
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
`;
