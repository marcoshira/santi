import { gql } from 'graphql-request';

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
