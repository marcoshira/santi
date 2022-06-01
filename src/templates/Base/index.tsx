import { NavBar } from '../../components/NavBar';
import { ProductGrid } from '../../components/ProductGrid';
import {
  ProductGridPropsProducts,
  ProductTypesProps,
} from '../../shared-types/shared-types';
import { HomePage } from '../HomePage';
import * as Styled from './styles';

export type BaseProps = {
  navBarVisible?: boolean;
  data?: ProductGridPropsProducts;
  types?: ProductTypesProps;
};

export const Base = ({ data, types }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <HomePage />
      <NavBar productTypes={types} />
      <ProductGrid products={data} />
    </Styled.Wrapper>
  );
};
