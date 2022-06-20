import { GetServerSideProps } from 'next';
import { Home, HomeProps } from '../templates/Home';
import { gqlClient } from '../graphql/client';
import {
  GQL_GET_PRODUCTS,
  GQL_GET_PRODUCT_TYPES,
} from '../graphql/queries/product';
import Head from 'next/head';

export default function Index({ data, types }: HomeProps) {
  return (
    <>
      <Head>
        <title>Santi | Marcos Hirazawa</title>
      </Head>
      <Home data={data} types={types} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { products } = await gqlClient.request(GQL_GET_PRODUCTS, null, {});
    const { productTypes } = await gqlClient.request(
      GQL_GET_PRODUCT_TYPES,
      null,
      {},
    );
    return {
      props: {
        data: products,
        types: productTypes,
      },
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};
