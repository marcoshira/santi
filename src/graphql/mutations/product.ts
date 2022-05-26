import { gql } from 'graphql-request';
import { GQL_FRAGMENT_PRODUCT } from '../fragments/products';

export const GQL_UPDATE_PRODUCT_STOCK = gql`
  ${GQL_FRAGMENT_PRODUCT}

  mutation UPDATE_PRODUCT_STOCK($prodID: ID!, $newStock: Int!) {
    updateProduct(id: $prodID, data: { stock: $newStock }) {
      data {
        id
        attributes {
          ...product
        }
      }
    }
  }
`;
