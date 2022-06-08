import { gql } from 'graphql-request';
import { GQL_FRAGMENT_CART } from '../fragments/cart';
import { GQL_FRAGMENT_FAVORITE } from '../fragments/favorite';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';
import { GQL_FRAGMENT_PURCHASE } from '../fragments/purchase';
import { GQL_FRAGMENT_USER } from '../fragments/user';

export const GQL_FORGOT_PASSWORD = gql`
  mutation FORGOT_PASSWORD($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
`;

export const GQL_REGISTER_USER = gql`
  mutation REGISTER_USER(
    $username: String!
    $email: String!
    $password: String!
  ) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        id
        username
        email
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;

export const GQL_RESET_PASSWORD = gql`
  mutation RESET_PASSWORD(
    $password: String!
    $passwordConfirmation: String!
    $code: String!
  ) {
    resetPassword(
      password: $password
      passwordConfirmation: $passwordConfirmation
      code: $code
    ) {
      jwt
      user {
        id
        username
        email
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;

export const GQL_AUTHENTICATE_USER = gql`
  ${GQL_FRAGMENT_USER}
  mutation AUTHENTICATE_USER($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const GQL_UPDATE_USER = gql`
  ${GQL_FRAGMENT_USER}
  ${GQL_FRAGMENT_CART}
  ${GQL_FRAGMENT_FAVORITE}
  ${GQL_FRAGMENT_PURCHASE}
  ${GQL_FRAGMENT_PRODUCT}
  mutation UPDATE_USER(
    $userID: ID!
    $email: String
    $username: String
    $address: String
    $phone: String
  ) {
    updateUsersPermissionsUser(
      id: $userID
      data: {
        email: $email
        username: $username
        address: $address
        phone: $phone
      }
    ) {
      data {
        id
        attributes {
          ...user
        }
      }
    }
  }
`;
