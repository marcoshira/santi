import { gqlClient } from '../graphql/client';
import {
  GQL_GET_PRODUCT_BY_ID,
  GQL_GET_PRODUCT_TYPES,
} from '../graphql/queries/product';
import { ProductQueryProps, ProductsProps } from '../shared-types/shared-types';

// export type LoadTypesVariables = {
//   id?: string;
// };

// export const loadTypes = async (
//   variables: LoadTypesVariables = {},
// ): Promise<TypesProps> => {
//   const types = await gqlClient.request(
//     GQL_GET_PRODUCT_BY_TYPE,
//     {
//       ...variables,
//     },
//     {},
//   );

//   return types;
// };

export type LoadProductVariables = {
  id?: string;
};

export const loadProduct = async (
  variables: LoadProductVariables = {},
): Promise<ProductQueryProps> => {
  const data = await gqlClient.request(
    GQL_GET_PRODUCT_BY_ID,
    {
      ...variables,
    },
    {},
  );
  const types = await gqlClient.request(GQL_GET_PRODUCT_TYPES, null, {});

  console.log(data, types, variables);
  return { data, types, variables };
};

export const loadProducts = async (): Promise<ProductsProps> => {
  const data = await gqlClient.request(GQL_GET_PRODUCT_BY_ID, null, {});

  console.log(data);
  return data;
};
