import { ProductCardArrayProps } from '../../shared-types/shared-types';
import * as Styled from './styles';

export const ProductCard = ({ attributes, id }: ProductCardArrayProps) => {
  return (
    <Styled.Wrapper href={`/products/${id}`}>
      <Styled.CardWrapper>
        <Styled.ImageWrapper>
          <img src={attributes.cover.data.attributes.url}></img>
        </Styled.ImageWrapper>
        <Styled.TextWrapper>
          <p>{attributes.name}</p>
          <p>R$ {attributes.price / 100}</p>
        </Styled.TextWrapper>
      </Styled.CardWrapper>
    </Styled.Wrapper>
  );
};
