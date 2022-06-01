import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { HomePage } from '../../templates/HomePage';
import { NavBar } from '../../components/NavBar';
import { ProductsByTypeQueryProps } from '../../shared-types/shared-types';
import { gqlClient } from '../../graphql/client';
import {
  GQL_GET_PRODUCT_BY_TYPE,
  GQL_GET_PRODUCT_TYPES,
} from '../../graphql/queries/product';
import { ProductGrid } from '../../components/ProductGrid';

export default function ProductHome({ data, types }: ProductsByTypeQueryProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const typeName = data.data[0].attributes.product_type.data.attributes.title;

  return (
    <>
      <Head>
        <title>{typeName} | Santi</title>
      </Head>
      <HomePage />
      <NavBar productTypes={types} />
      <ProductGrid products={data} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { products } = await gqlClient.request(
      GQL_GET_PRODUCT_BY_TYPE,
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
        data: products,
        types: productTypes,
      },
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};
