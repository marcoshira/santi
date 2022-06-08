import { gql } from 'graphql-request';

export const GQL_FRAGMENT_USER = gql`
  fragment user on UsersPermissionsUser {
    username
    email
    confirmed
    address
    phone
    createdAt
    cart_quantity {
      data {
        id
        attributes {
          ...quant
        }
      }
    }
    favorite {
      data {
        id
        attributes {
          ...favorite
        }
      }
    }
    puchase {
      data {
        id
        attributes {
          ...purchase
        }
      }
    }
  }
`;
