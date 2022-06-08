import Link from 'next/link';
import { CartQuantityAttributesProps } from '../../shared-types/shared-types';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const CartCard = ({
  product,
  quantity,
}: CartQuantityAttributesProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/products/${product.data.id}`}>
        <a>
          <img src={product.data.attributes.cover.data.attributes.url} />
        </a>
      </Link>

      <Styled.ContentWrapper>
        <Link href={`/products/${product.data.id}`}>
          <a>
            <Heading size="medium">{product.data.attributes.name}</Heading>
          </a>
        </Link>

        <p>
          Price: R$ {product.data.attributes.price / 100} | Quantity: {quantity}
        </p>
        <p>
          Total price: R$: {(product.data.attributes.price * quantity) / 100}
        </p>
        <Button>Buy Now</Button>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};
