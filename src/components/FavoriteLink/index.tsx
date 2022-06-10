import { FavoriteProps } from '../../shared-types/shared-types';
import { FavoriteCard, FavoriteCardProps } from '../FavoriteCard';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const FavoriteLink = ({
  data,
  cart,
  onCart,
  onCartNo,
  onFav,
  onPurchase,
}: FavoriteProps & FavoriteCardProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="medium">Favorites</Heading>
      {data.attributes.products.data.length > 0 ? (
        data.attributes.products.data.map((item) => (
          <FavoriteCard
            key={item.id}
            cart={cart}
            onCart={onCart}
            onCartNo={onCartNo}
            onFav={onFav}
            onPurchase={onPurchase}
            {...item}
          />
        ))
      ) : (
        <p>No Favorites Yet</p>
      )}
    </Styled.Wrapper>
  );
};
