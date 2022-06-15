import Link from 'next/link';
import { Close } from '@styled-icons/material-outlined/Close';
import { ItemProps } from '../../shared-types/shared-types';
import { formatDate } from '../../utils/format-date';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';
import { InputProps } from '../ProductPage';

export const PurchaseCard = ({
  Quantity,
  date,
  product,
  onPurchase,
}: ItemProps & InputProps) => {
  const handlePurchase = async (quant: number, id: string) => {
    /* istanbul ignore else */
    if (onPurchase) {
      await onPurchase(quant, id);
    }
  };
  return (
    <Styled.Wrapper>
      <Styled.ImageWrapper>
        <Link href={`/products/${product.data.id}`}>
          <a>
            <img src={product.data.attributes.cover.data.attributes.url} />
          </a>
        </Link>
      </Styled.ImageWrapper>

      <Styled.ContentWrapper>
        <Link href={`/products/${product.data.id}`}>
          <a>
            <Heading size="medium">{product.data.attributes.name}</Heading>
          </a>
        </Link>
        <a
          id="close"
          aria-label="close"
          onClick={() => handlePurchase(Quantity, product.data.id)}
        >
          <Close />
        </a>

        <p>
          Price: R$ {product.data.attributes.price / 100} | Quantity: {Quantity}
        </p>
        <p>
          Total price: R$: {(product.data.attributes.price * Quantity) / 100}
        </p>
        <p id="date">Bought at {formatDate(date)}</p>
        <Link href={`/products/${product.data.id}`}>
          <a>
            <Button>Buy Again</Button>
          </a>
        </Link>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};
