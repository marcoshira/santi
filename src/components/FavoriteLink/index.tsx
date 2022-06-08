import { FavoriteProps } from '../../shared-types/shared-types';
import { FavoriteCard } from '../FavoriteCard';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const FavoriteLink = ({ data }: FavoriteProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="medium">Favorites</Heading>
      {data.attributes.products.data.length > 0 ? (
        data.attributes.products.data.map((item) => (
          <FavoriteCard key={item.id} {...item} />
        ))
      ) : (
        <p>No Favorites Yet</p>
      )}
    </Styled.Wrapper>
  );
};
