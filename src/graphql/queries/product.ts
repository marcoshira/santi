import { gql } from 'graphql-request';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';

export const GQL_GET_PRODUCT_BY_TYPE = gql`
  query GET_PRODUCT_BY_TYPE($id: ID!) {
    products(filters: { product_type: { id: { eq: $id } } }) {
      data {
        id
        attributes {
          name
          description
          price
          stock
          product_type {
            data {
              attributes {
                title
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GQL_GET_PRODUCT_TYPES = gql`
  query GET_PRODUCT_TYPES {
    productTypes {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;

export const GQL_GET_PRODUCTS = gql`
  ${GQL_FRAGMENT_PRODUCT}

  query GET_PRODUCTS {
    products {
      data {
        id
        attributes {
          ...product
        }
      }
    }
  }
`;

export const GQL_GET_PRODUCT_BY_ID = gql`
  ${GQL_FRAGMENT_PRODUCT}

  query GET_PRODUCT_BY_ID($id: ID!) {
    product(id: $id) {
      data {
        id
        attributes {
          ...product
        }
      }
    }
  }
`;

export const GQL_GET_PRODUCT_TYPE_BY_ID = gql`
  query GET_PRODUCT_TYPE_BY_ID($id: ID!) {
    productType(id: $id) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
