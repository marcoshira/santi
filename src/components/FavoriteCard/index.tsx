import Link from 'next/link';
import {
  CartQuantityProps,
  ProductCardArrayProps,
} from '../../shared-types/shared-types';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';
import { Favorite } from '@styled-icons/material-outlined/Favorite';
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder';
import { useState } from 'react';
import { InputProps } from '../ProductPage';

export type FavoriteCardProps = {
  cart?: CartQuantityProps;
  onCartNo?: (id?: string) => void;
} & InputProps;

export const FavoriteCard = ({
  attributes,
  id,
  cart,
  onCart,
  onCartNo,
  onFav,
  onPurchase,
}: ProductCardArrayProps & FavoriteCardProps) => {
  const isCart = cart.data.attributes.cartQuantity
    .map((p) => {
      return p.product.data.id;
    })
    .includes(id);

  const [favorite, setFavorite] = useState(true);
  const [cartLoading, setCartLoading] = useState(false);
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const [quant, setQuant] = useState(1);
  const [inCart, setInCart] = useState(isCart);
  const [disabled, setDisabled] = useState(true);

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

  const handleFav = async (id: string) => {
    if (onFav) {
      await onFav(id);
      setFavorite(!favorite);
    }
  };

  const handleCart = async (quant: number, id: string) => {
    setCartLoading(true);
    if (onCart) {
      await onCart(quant, id);
      setInCart(true);
    }
    setCartLoading(false);
  };
  const handleNoCart = async (id: string) => {
    setCartLoading(true);
    if (onCartNo) {
      await onCartNo(id);
      setInCart(false);
    }
    setCartLoading(false);
  };
  const handlePurchase = async (quant: number, id: string) => {
    setPurchaseLoading(true);
    if (onPurchase) {
      await onPurchase(quant, id);
    }
    setPurchaseLoading(false);
  };

  return (
    <Styled.Wrapper>
      <Styled.ImageWrapper>
        <Link href={`/products/${id}`}>
          <a>
            <img src={attributes.cover.data.attributes.url} />
          </a>
        </Link>
      </Styled.ImageWrapper>

      <Styled.ContentWrapper>
        <Link href={`/products/${id}`}>
          <a>
            <Heading size="medium">{attributes.name}</Heading>
          </a>
        </Link>
        <a onClick={() => handleFav(id)}>
          {favorite ? <Favorite /> : <FavoriteBorder />}
        </a>

        <p>Price: R$ {attributes.price / 100}</p>
        <Styled.InputWrapper>
          <label>Quantity :</label>
          <Styled.Button onClick={() => minusBtn(quant)} disabled={disabled}>
            -
          </Styled.Button>
          <input type="text" value={quant} onChange={(v) => handleChange(v)} />
          <Styled.Button onClick={() => plusBtn(quant)}>+</Styled.Button>
        </Styled.InputWrapper>
        <Styled.ButtonContainer>
          {inCart ? (
            <Button
              id="cartNo"
              onClick={() => handleNoCart(id)}
              disabled={cartLoading}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              id="cart"
              onClick={() => handleCart(quant, id)}
              disabled={cartLoading}
            >
              Add to Cart
            </Button>
          )}
          <Button
            id="buy"
            onClick={() => handlePurchase(quant, id)}
            disabled={purchaseLoading}
          >
            Buy now
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};
