import { ProductGridProps } from '../../shared-types/shared-types';
import { ProductCard } from '../ProductCard';
import * as Styled from './styles';

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <Styled.Wrapper>
      {products.data.map((prod) => (
        <ProductCard key={prod.id} attributes={prod.attributes} id={prod.id} />
      ))}
    </Styled.Wrapper>
  );
};
