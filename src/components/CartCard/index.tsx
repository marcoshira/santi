import Link from 'next/link';
import { useState } from 'react';
import { CartQuantityAttributesProps } from '../../shared-types/shared-types';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { InputProps } from '../ProductPage';
import * as Styled from './styles';

export const CartCard = ({
  product,
  quantity,
  onCart,
  onPurchase,
}: CartQuantityAttributesProps & InputProps) => {
  const [cartLoading, setCartLoading] = useState(false);
  const [purchaseLoading, setPurchaseLoading] = useState(false);

  const handleCart = async (quant: number, id: string) => {
    setCartLoading(true);
    /* istanbul ignore else */
    if (onCart) {
      await onCart(quant, id);
    }
    setCartLoading(false);
  };
  const handlePurchase = async (quant: number, id: string) => {
    setPurchaseLoading(true);
    /* istanbul ignore else */
    if (onPurchase) {
      await onPurchase(quant, id);
    }
    setPurchaseLoading(false);
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

        <p>
          Price: R$ {product.data.attributes.price / 100} | Quantity: {quantity}
        </p>
        <p>
          Total price: R$: {(product.data.attributes.price * quantity) / 100}
        </p>
        <Styled.ButtonContainer>
          <Button
            id="cart"
            onClick={() => handleCart(quantity, product.data.id)}
            disabled={cartLoading}
          >
            Remove from Cart
          </Button>
          <Button
            id="buy"
            onClick={() => handlePurchase(quantity, product.data.id)}
            disabled={purchaseLoading}
          >
            Buy Now
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};
