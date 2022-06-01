import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { HomePage } from '../../templates/HomePage';
import { NavBar } from '../../components/NavBar';
import { ProductQueryProps } from '../../shared-types/shared-types';
import { ProductPage } from '../../components/ProductPage';
import { gqlClient } from '../../graphql/client';
import {
  GQL_GET_PRODUCT_BY_ID,
  GQL_GET_PRODUCT_TYPES,
} from '../../graphql/queries/product';

export default function ProductHome({ data, types }: ProductQueryProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const productName = data.data.attributes.name;

  return (
    <>
      <Head>
        <title>{productName} | Santi</title>
      </Head>
      <HomePage />
      <NavBar productTypes={types} />
      <ProductPage {...data.data} id={data.data.id} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { product } = await gqlClient.request(
      GQL_GET_PRODUCT_BY_ID,
      { id: ctx.query.id },
      {},
    );
    const { productTypes } = await gqlClient.request(
      GQL_GET_PRODUCT_TYPES,
      null,
      {},
    );
    return {
      props: {
        data: product,
        types: productTypes,
      },
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};
