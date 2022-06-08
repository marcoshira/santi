import Link from 'next/link';
import { ProductCardArrayProps } from '../../shared-types/shared-types';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';
import { Favorite } from '@styled-icons/material-outlined/Favorite';
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder';
import { useState } from 'react';

export const FavoriteCard = ({ attributes, id }: ProductCardArrayProps) => {
  const [favorite, setFavorite] = useState(true);
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
        <a onClick={() => setFavorite(!favorite)}>
          {favorite ? <Favorite /> : <FavoriteBorder />}
        </a>

        <p>Price: R$ {attributes.price / 100}</p>
        <Styled.ButtonContainer>
          <Button id="cart">Add to Cart</Button>
          <Button id="buy">Buy now</Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};
