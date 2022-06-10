import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { ProfileComponent } from '../components/ProfileComponent';
import { gqlClient } from '../graphql/client';
import { StrapiSession } from '../templates/Home';
import { HomePage } from '../templates/HomePage';
import { GQL_GET_USER_BY_ID } from '../graphql/queries/user';
import { UserPermissionProps } from '../shared-types/shared-types';
import Head from 'next/head';
import { GQL_UPDATE_USER } from '../graphql/mutations/user';
import { GQL_UPDATE_CART } from '../graphql/mutations/cart';
import { formatDate } from '../utils/format-date';
import { GQL_UPDATE_PURCHASE } from '../graphql/mutations/purchase';
import { GQL_UPDATE_FAVORITE } from '../graphql/mutations/favorite';

export type ProfilePageProps = {
  user: UserPermissionProps;
  jwt?: string;
};

export default function ProfilePage({ user, jwt }: ProfilePageProps) {
  const profileName = user.data.attributes.username;

  const handleSubmit = async (
    username: string,
    telephone: string,
    address: string,
  ) => {
    try {
      const session = await getSession();
      const newSession = session as StrapiSession;
      await gqlClient.request(
        GQL_UPDATE_USER,
        {
          userID: newSession.user.user.id,
          username: username,
          address: address,
          phone: telephone,
        },
        { Authorization: `Bearer ${newSession.user.jwt}` },
      );
      window.location.reload();
    } catch (e) {
      return null;
    }
  };
  const handlePurchasePurchase = async (quant: number, id: string) => {
    try {
      const array = user.data.attributes.puchase.data.attributes.Item.map(
        (p) => {
          return {
            Quantity: p.Quantity,
            product: p.product.data.id,
            date: p.date,
          };
        },
      );
      const arrayMap = array.map((i) => {
        return i.product;
      });
      const index = arrayMap.indexOf(id);
      array.splice(index, 1);
      const purch = {
        Item: array,
      };
      await gqlClient.request(
        GQL_UPDATE_PURCHASE,
        {
          id: user.data.attributes.puchase.data.id,
          purchase: purch,
        },
        { Authorization: `Bearer ${jwt}` },
      );
      window.location.reload();
    } catch (e) {
      return null;
    }
  };

  const handleFavFav = async (id: string) => {
    try {
      const array =
        user.data.attributes.favorite.data.attributes.products.data.map((p) => {
          return p.id;
        });
      const index = array.indexOf(id);
      array.splice(index, 1);
      const fav = {
        products: array,
      };
      await gqlClient.request(
        GQL_UPDATE_FAVORITE,
        {
          id: user.data.attributes.favorite.data.id,
          favoriteInp: fav,
        },
        { Authorization: `Bearer ${jwt}` },
      );
      window.location.reload();
    } catch (e) {
      return null;
    }
  };

  const handleFavNoCart = async (id: string) => {
    try {
      const array =
        user.data.attributes.cart_quantity.data.attributes.cartQuantity.map(
          (c) => {
            return { quantity: c.quantity, product: c.product.data.id };
          },
        );
      const arrayMap = array.map((i) => {
        return i.product;
      });
      const index = arrayMap.indexOf(id);
      array.splice(index, 1);
      const cartQ = {
        cartQuantity: array,
      };
      await gqlClient.request(
        GQL_UPDATE_CART,
        {
          id: user.data.attributes.cart_quantity.data.id,
          cartQuant: cartQ,
        },
        { Authorization: `Bearer ${jwt}` },
      );
      window.location.reload();
    } catch (e) {
      return null;
    }
  };

  const handleFavCart = async (quant: number, id: string) => {
    try {
      const array =
        user.data.attributes.cart_quantity.data.attributes.cartQuantity.map(
          (c) => {
            return { quantity: c.quantity, product: c.product.data.id };
          },
        );
      array.push({ quantity: quant, product: id });

      const cartQ = {
        cartQuantity: array,
      };

      await gqlClient.request(
        GQL_UPDATE_CART,
        {
          id: user.data.attributes.cart_quantity.data.id,
          cartQuant: cartQ,
        },
        { Authorization: `Bearer ${jwt}` },
      );
      window.location.reload();
    } catch (e) {
      return null;
    }
  };

  const handleFavPurchase = async (quant: number, id: string) => {
    try {
      const date = new Date();

      const arrayP = user.data.attributes.puchase.data.attributes.Item.map(
        (p) => {
          return {
            Quantity: p.Quantity,
            product: p.product.data.id,
            date: p.date,
          };
        },
      );
      arrayP.push({
        Quantity: quant,
        product: id,
        date: formatDate(date.toString()),
      });

      const purch = {
        Item: arrayP,
      };

      await gqlClient.request(
        GQL_UPDATE_PURCHASE,
        {
          id: user.data.attributes.puchase.data.id,
          purchase: purch,
        },
        { Authorization: `Bearer ${jwt}` },
      );
      const array =
        user.data.attributes.cart_quantity.data.attributes.cartQuantity.map(
          (c) => {
            return { quantity: c.quantity, product: c.product.data.id };
          },
        );
      const arrayMap = array.map((i) => {
        return i.product;
      });
      const index = arrayMap.indexOf(id);
      if (!(index === -1)) {
        array.splice(index, 1);
        const cartQ = {
          cartQuantity: array,
        };
        await gqlClient.request(
          GQL_UPDATE_CART,
          {
            id: user.data.attributes.cart_quantity.data.id,
            cartQuant: cartQ,
          },
          { Authorization: `Bearer ${jwt}` },
        );
      }
      window.location.reload();
    } catch (e) {
      return null;
    }
  };

  const handleCartCart = async (quant: number, id: string) => {
    try {
      const array =
        user.data.attributes.cart_quantity.data.attributes.cartQuantity.map(
          (c) => {
            return { quantity: c.quantity, product: c.product.data.id };
          },
        );
      const arrayMap = array.map((i) => {
        return i.product;
      });
      const index = arrayMap.indexOf(id);
      array.splice(index, 1);
      const cartQ = {
        cartQuantity: array,
      };
      await gqlClient.request(
        GQL_UPDATE_CART,
        {
          id: user.data.attributes.cart_quantity.data.id,
          cartQuant: cartQ,
        },
        { Authorization: `Bearer ${jwt}` },
      );
      window.location.reload();
    } catch (e) {
      return null;
    }
  };

  const handleCartPurchase = async (quant: number, id: string) => {
    try {
      const date = new Date();

      const arrayP = user.data.attributes.puchase.data.attributes.Item.map(
        (p) => {
          return {
            Quantity: p.Quantity,
            product: p.product.data.id,
            date: p.date,
          };
        },
      );
      arrayP.push({
        Quantity: quant,
        product: id,
        date: formatDate(date.toString()),
      });

      const purch = {
        Item: arrayP,
      };

      await gqlClient.request(
        GQL_UPDATE_PURCHASE,
        {
          id: user.data.attributes.puchase.data.id,
          purchase: purch,
        },
        { Authorization: `Bearer ${jwt}` },
      );
      const array =
        user.data.attributes.cart_quantity.data.attributes.cartQuantity.map(
          (c) => {
            return { quantity: c.quantity, product: c.product.data.id };
          },
        );
      const arrayMap = array.map((i) => {
        return i.product;
      });
      const index = arrayMap.indexOf(id);
      array.splice(index, 1);
      const cartQ = {
        cartQuantity: array,
      };
      await gqlClient.request(
        GQL_UPDATE_CART,
        {
          id: user.data.attributes.cart_quantity.data.id,
          cartQuant: cartQ,
        },
        { Authorization: `Bearer ${jwt}` },
      );
      window.location.reload();
    } catch (e) {
      return null;
    }
  };

  return (
    <>
      <Head>
        <title>{profileName} | Santi</title>
      </Head>
      <HomePage />
      <ProfileComponent
        onSubmit={handleSubmit}
        onCartCart={handleCartCart}
        onCartPurchase={handleCartPurchase}
        onPurchasePurchase={handlePurchasePurchase}
        onFavFav={handleFavFav}
        onFavNoCart={handleFavNoCart}
        onFavCart={handleFavCart}
        onFavPurchase={handleFavPurchase}
        {...user.data.attributes}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const newSession = session as StrapiSession;
  let redirect = 'profile' as string;
  if (ctx.query && ctx.query.id) {
    redirect = ctx.query.id as string;
  }
  try {
    const { usersPermissionsUser } = await gqlClient.request(
      GQL_GET_USER_BY_ID,
      { userID: newSession.user.user.id },
      { Authorization: `Bearer ${newSession.user.jwt}` },
    );
    usersPermissionsUser.data.attributes.redirect = redirect;
    return {
      props: {
        user: usersPermissionsUser,
        jwt: newSession.user.jwt,
      },
    };
  } catch (e) {
    return null;
  }
};
