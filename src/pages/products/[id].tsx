import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { HomePage } from '../../templates/HomePage';
import { NavBar } from '../../components/NavBar';
import { ProductQueryProps, UserProps } from '../../shared-types/shared-types';
import { ProductPage } from '../../components/ProductPage';
import { gqlClient } from '../../graphql/client';
import {
  GQL_GET_PRODUCT_BY_ID,
  GQL_GET_PRODUCT_TYPES,
} from '../../graphql/queries/product';
import { getSession } from 'next-auth/react';
import { StrapiSession } from '../../templates/Home';
import { GQL_GET_USER_BY_ID } from '../../graphql/queries/user';
import { GQL_UPDATE_CART } from '../../graphql/mutations/cart';
import { GQL_UPDATE_PURCHASE } from '../../graphql/mutations/purchase';
import { formatDate } from '../../utils/format-date';
import { GQL_UPDATE_FAVORITE } from '../../graphql/mutations/favorite';
import { useState } from 'react';

export default function ProductHome({
  data,
  types,
  cartBool,
  favBool,
}: ProductQueryProps) {
  const router = useRouter();
  const [favorite, setFavorite] = useState(favBool);
  const [cart, setCart] = useState(cartBool);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const productName = data.data.attributes.name;
  const id = data.data.id;

  const handleCart = async (quant: number) => {
    try {
      const session = await getSession();
      if (!session) {
        alert('You are not Logged In');
        router.push('/login');
      }
      const newSession = session as StrapiSession;

      const user = (await gqlClient.request(
        GQL_GET_USER_BY_ID,
        {
          userID: newSession.user.user.id,
        },
        { Authorization: `Bearer ${newSession.user.jwt}` },
      )) as UserProps;

      if (cart) {
        const array =
          user.usersPermissionsUser.data.attributes.cart_quantity.data.attributes.cartQuantity.map(
            (c) => {
              return { quantity: c.quantity, product: c.product.data.id };
            },
          );
        const arrayMap = array.map((i) => {
          return i.product;
        });
        const index = arrayMap.indexOf(data.data.id);
        array.splice(index, 1);
        const cartQ = {
          cartQuantity: array,
        };
        await gqlClient.request(
          GQL_UPDATE_CART,
          {
            id: user.usersPermissionsUser.data.attributes.cart_quantity.data.id,
            cartQuant: cartQ,
          },
          { Authorization: `Bearer ${newSession.user.jwt}` },
        );
        setCart(false);
      } else {
        const array =
          user.usersPermissionsUser.data.attributes.cart_quantity.data.attributes.cartQuantity.map(
            (c) => {
              return { quantity: c.quantity, product: c.product.data.id };
            },
          );
        array.push({ quantity: quant, product: data.data.id });

        const cartQ = {
          cartQuantity: array,
        };

        await gqlClient.request(
          GQL_UPDATE_CART,
          {
            id: user.usersPermissionsUser.data.attributes.cart_quantity.data.id,
            cartQuant: cartQ,
          },
          { Authorization: `Bearer ${newSession.user.jwt}` },
        );
        setCart(true);
      }
    } catch (e) {
      return null;
    }
  };

  const handlePurchase = async (quant: number) => {
    try {
      const session = await getSession();
      if (!session) {
        alert('You are not Logged In');
        router.push('/login');
      }
      const newSession = session as StrapiSession;
      const user = (await gqlClient.request(
        GQL_GET_USER_BY_ID,
        {
          userID: newSession.user.user.id,
        },
        { Authorization: `Bearer ${newSession.user.jwt}` },
      )) as UserProps;

      const date = new Date();

      const teste =
        user.usersPermissionsUser.data.attributes.puchase.data.attributes.Item.map(
          (p) => {
            return {
              Quantity: p.Quantity,
              product: p.product.data.id,
              date: p.date,
            };
          },
        );
      teste.push({
        Quantity: quant,
        product: data.data.id,
        date: formatDate(date.toString()),
      });

      const purch = {
        Item: teste,
      };

      await gqlClient.request(
        GQL_UPDATE_PURCHASE,
        {
          id: user.usersPermissionsUser.data.attributes.puchase.data.id,
          purchase: purch,
        },
        { Authorization: `Bearer ${newSession.user.jwt}` },
      );
    } catch (e) {
      return null;
    }
  };

  const handleFavorite = async () => {
    try {
      const session = await getSession();
      if (!session) {
        alert('You are not Logged In');
        router.push('/login');
      }
      const newSession = session as StrapiSession;
      const user = (await gqlClient.request(
        GQL_GET_USER_BY_ID,
        {
          userID: newSession.user.user.id,
        },
        { Authorization: `Bearer ${newSession.user.jwt}` },
      )) as UserProps;
      if (favorite) {
        const array =
          user.usersPermissionsUser.data.attributes.favorite.data.attributes.products.data.map(
            (f) => {
              return f.id;
            },
          );
        const index = array.indexOf(data.data.id);
        array.splice(index, 1);
        const fav = {
          products: array,
        };
        await gqlClient.request(
          GQL_UPDATE_FAVORITE,
          {
            id: user.usersPermissionsUser.data.attributes.favorite.data.id,
            favoriteInp: fav,
          },
          { Authorization: `Bearer ${newSession.user.jwt}` },
        );
        setFavorite(false);
      } else {
        const array =
          user.usersPermissionsUser.data.attributes.favorite.data.attributes.products.data.map(
            (f) => {
              return f.id;
            },
          );
        array.push(data.data.id);

        const fav = {
          products: array,
        };

        await gqlClient.request(
          GQL_UPDATE_FAVORITE,
          {
            id: user.usersPermissionsUser.data.attributes.favorite.data.id,
            favoriteInp: fav,
          },
          { Authorization: `Bearer ${newSession.user.jwt}` },
        );
        setFavorite(true);
      }
    } catch (e) {
      return null;
    }
  };

  return (
    <>
      <Head>
        <title>{productName} | Santi</title>
      </Head>
      <HomePage />
      <NavBar productTypes={types} />
      <ProductPage
        {...data.data}
        id={id}
        onCart={handleCart}
        onPurchase={handlePurchase}
        onFav={handleFavorite}
      />
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
    let cart = false;
    let favorite = false;
    const session = await getSession(ctx);
    if (session) {
      const newSession = session as StrapiSession;
      const user = (await gqlClient.request(
        GQL_GET_USER_BY_ID,
        {
          userID: newSession.user.user.id,
        },
        { Authorization: `Bearer ${newSession.user.jwt}` },
      )) as UserProps;
      if (
        user.usersPermissionsUser.data.attributes.cart_quantity.data.attributes.cartQuantity
          .map((p) => {
            return p.product.data.id;
          })
          .includes(product.data.id)
      ) {
        cart = true;
      } else {
        cart = false;
      }
      if (
        user.usersPermissionsUser.data.attributes.favorite.data.attributes.products.data
          .map((f) => {
            return f.id;
          })
          .includes(product.data.id)
      ) {
        favorite = true;
      } else {
        favorite = false;
      }
    }

    return {
      props: {
        data: product,
        types: productTypes,
        cartBool: cart,
        favBool: favorite,
      },
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};
