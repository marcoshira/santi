import Link from 'next/link';
import { useState } from 'react';
import { ProductCardArrayProps } from '../../shared-types/shared-types';
import { Button } from '../Button';
import * as Styled from './styles';
import { Favorite } from '@styled-icons/material-outlined/Favorite';
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder';

export type InputProps = {
  onInputChange?: (value: string) => void;
};

export const ProductPage = ({
  attributes,
  onInputChange,
}: ProductCardArrayProps & InputProps) => {
  const maxLength = 350;
  const [fullTxt, setFullTxt] = useState(false);
  const [quant, setQuant] = useState(1);
  const [disabled, setDisabled] = useState(true);

  const [favorite, setFavorite] = useState(false);

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

  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.ImageWrapper>
          <img src={attributes.cover.data.attributes.url} />
        </Styled.ImageWrapper>
        <Styled.TextWrapper>
          <p id="title">{attributes.name}</p>
          <a onClick={() => setFavorite(!favorite)}>
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
            <Button id="cart">Add to Cart</Button>
            <Button id="buy">Buy now</Button>
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
