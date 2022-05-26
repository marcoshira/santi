import { gql } from 'graphql-request';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';

export const GQL_GET_PRODUCT_BY_TYPE = gql`
  query GET_PRODUCT_BY_TYPE($typeID: ID!) {
    products(filters: { product_type: { id: { eq: $typeID } } }) {
      data {
        id
        attributes {
          name
          description
          price
          stock
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
