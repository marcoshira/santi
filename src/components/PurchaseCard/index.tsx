import Link from 'next/link';
import { ItemProps } from '../../shared-types/shared-types';
import { formatDate } from '../../utils/format-date';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const PurchaseCard = ({ Quantity, date, product }: ItemProps) => {
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
          Price: R$ {product.data.attributes.price / 100} | Quantity: {Quantity}
        </p>
        <p>
          Total price: R$: {(product.data.attributes.price * Quantity) / 100}
        </p>
        <p id="date">Bought at {formatDate(date)}</p>
        <Button>Buy Again</Button>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};
