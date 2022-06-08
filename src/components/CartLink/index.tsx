import { CartQuantityProps } from '../../shared-types/shared-types';
import { CartCard } from '../CartCard';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const CartLink = ({ data }: CartQuantityProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="medium">Cart</Heading>
      {data.attributes.cartQuantity.length > 0 ? (
        data.attributes.cartQuantity.map((item) => (
          <CartCard key={item.id} {...item} />
        ))
      ) : (
        <p>Nothing in Cart</p>
      )}
    </Styled.Wrapper>
  );
};
