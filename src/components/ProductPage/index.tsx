import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ProductCardArrayProps,
  UserProps,
} from '../../shared-types/shared-types';
import { Button } from '../Button';
import * as Styled from './styles';
import { Favorite } from '@styled-icons/material-outlined/Favorite';
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder';
import { useSession } from 'next-auth/react';
import { StrapiSession } from '../../templates/Home';
import { gqlClient } from '../../graphql/client';
import { GQL_GET_USER_BY_ID } from '../../graphql/queries/user';

export type InputProps = {
  onFav?: (id?: string) => void;
  onCart?: (quant?: number, id?: string) => void;
  onPurchase?: (quant: number, id?: string) => void;
};

export const ProductPage = ({
  attributes,
  id,
  onFav,
  onCart,
  onPurchase,
}: ProductCardArrayProps & InputProps) => {
  const { data: session } = useSession();

  const maxLength = 350;
  const [fullTxt, setFullTxt] = useState(false);
  const [quant, setQuant] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const [cartLoading, setCartLoading] = useState(false);
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [cart, setCart] = useState(false);
  const [purchase, setPurchase] = useState(false);

  const getSessionProps = async () => {
    if (session) {
      const newSession = session as StrapiSession;
      const user = (await gqlClient.request(
        GQL_GET_USER_BY_ID,
        {
          userID: newSession.user.user.id,
        },
        { Authorization: `Bearer ${newSession.user.jwt}` },
      )) as UserProps;
      await new Promise((r) => setTimeout(r, 200));
      if (
        await user.usersPermissionsUser.data.attributes.favorite.data.attributes.products.data
          .map((p) => {
            return p.id;
          })
          .includes(id)
      ) {
        setFavorite(true);
      }
      if (
        await user.usersPermissionsUser.data.attributes.cart_quantity.data.attributes.cartQuantity
          .map((p) => {
            return p.product.data.id;
          })
          .includes(id)
      ) {
        setCart(true);
      }
      if (
        await user.usersPermissionsUser.data.attributes.puchase.data.attributes.Item.map(
          (p) => {
            return p.product.data.id;
          },
        ).includes(id)
      ) {
        setPurchase(true);
      }
    }
  };
  useEffect(() => {
    getSessionProps();
  });

  const handleChange = (value) => {
    setQuant(value);
  };

  const minusBtn = (quant) => {
    if (quant === 2) {
      setDisabled(true);
    }
    setQuant(quant - 1);
  };

  const plusBtn = (quant) => {
    if (quant === 1) {
      setDisabled(false);
    }
    setQuant(quant + 1);
  };

  const handleFav = async () => {
    if (onFav) {
      await onFav();
      setFavorite(!favorite);
    }
  };

  const handleCart = async (quant: number) => {
    setCartLoading(true);
    if (onCart) {
      await onCart(quant);
      setCart(!cart);
    }
    setCartLoading(false);
  };
  const handlePurchase = async (quant: number) => {
    setPurchaseLoading(true);
    if (onPurchase) {
      await onPurchase(quant);
      setPurchase(!purchase);
    }
    setPurchaseLoading(false);
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.ImageWrapper>
          <img src={attributes.cover.data.attributes.url} />
        </Styled.ImageWrapper>
        <Styled.TextWrapper>
          <p id="title">{attributes.name}</p>
          <a onClick={() => handleFav()}>
            {favorite ? <Favorite /> : <FavoriteBorder />}
          </a>
          <Link href={`/types/${attributes.product_type.data.id}`}>
            <a>
              <p>{attributes.product_type.data.attributes.title}</p>
            </a>
          </Link>
          <p id="price">R$ {attributes.price / 100}</p>
          <Styled.InputWrapper>
            <label>Quantity :</label>
            <Styled.Button onClick={() => minusBtn(quant)} disabled={disabled}>
              -
            </Styled.Button>
            <input
              type="text"
              value={quant}
              onChange={(v) => handleChange(v)}
            />
            <Styled.Button onClick={() => plusBtn(quant)}>+</Styled.Button>
          </Styled.InputWrapper>
          <Styled.ButtonContainer>
            {cart ? (
              <Button
                id="cart"
                onClick={() => handleCart(quant)}
                disabled={cartLoading}
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                id="cart"
                onClick={() => handleCart(quant)}
                disabled={cartLoading}
              >
                Add to Cart
              </Button>
            )}
            {purchase ? (
              <Button
                id="buy"
                onClick={() => handlePurchase(quant)}
                disabled={purchaseLoading}
              >
                Buy Again
              </Button>
            ) : (
              <Button
                id="buy"
                onClick={() => handlePurchase(quant)}
                disabled={purchaseLoading}
              >
                Buy now
              </Button>
            )}
          </Styled.ButtonContainer>
        </Styled.TextWrapper>
      </Styled.ContentWrapper>
      <Styled.DescWrapper>
        {!!fullTxt || attributes.description.length < maxLength ? (
          <>
            <p>
              {attributes.description} &nbsp;
              {attributes.description.length > maxLength ? (
                <a onClick={() => setFullTxt(false)}>Read less</a>
              ) : (
                ''
              )}
            </p>
          </>
        ) : (
          <p>
            {attributes.description.slice(0, maxLength)}...{' '}
            <a onClick={() => setFullTxt(true)}>Read more</a>
          </p>
        )}
      </Styled.DescWrapper>
    </Styled.Wrapper>
  );
};
