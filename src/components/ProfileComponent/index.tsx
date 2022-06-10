import { useEffect, useState } from 'react';
import { ProfileComponentProps } from '../../shared-types/shared-types';
import { CartLink } from '../CartLink';
import { FavoriteLink } from '../FavoriteLink';
import { MenuLink } from '../MenuLink';
import { ProfileLink } from '../ProfileLink';
import { PurchaseLink } from '../PurchaseLink';
import * as Styled from './styles';

export const ProfileComponent = ({
  address,
  cart_quantity,
  createdAt,
  phone,
  puchase,
  username,
  favorite,
  onSubmit,
  redirect,
  onCartCart,
  onCartPurchase,
  onPurchasePurchase,
  onFavCart,
  onFavFav,
  onFavNoCart,
  onFavPurchase,
}: ProfileComponentProps) => {
  const [navState, setNavState] = useState('profile');

  useEffect(() => {
    if (redirect) {
      setNavState(redirect);
    }
  }, [redirect]);

  return (
    <Styled.Wrapper>
      <Styled.Nav>
        <Styled.NavBar>
          <MenuLink onClick={() => setNavState('profile')}>Profile</MenuLink>
          <MenuLink onClick={() => setNavState('purchases')}>
            Purchases
          </MenuLink>
          <MenuLink onClick={() => setNavState('cart')}>Cart</MenuLink>
          <MenuLink onClick={() => setNavState('favorites')}>
            Favorites
          </MenuLink>
        </Styled.NavBar>
      </Styled.Nav>
      <Styled.Content>
        {navState === 'profile' ? (
          <ProfileLink
            address={address}
            username={username}
            phone={phone}
            createdAt={createdAt}
            onSubmit={onSubmit}
          />
        ) : navState === 'purchases' ? (
          <PurchaseLink
            onPurchase={onPurchasePurchase}
            Item={puchase.data.attributes.Item}
          />
        ) : navState === 'cart' ? (
          <CartLink
            onCart={onCartCart}
            onPurchase={onCartPurchase}
            data={cart_quantity.data}
          />
        ) : navState === 'favorites' ? (
          <FavoriteLink
            cart={cart_quantity}
            onCart={onFavCart}
            onCartNo={onFavNoCart}
            onFav={onFavFav}
            onPurchase={onFavPurchase}
            data={favorite.data}
          />
        ) : null}
      </Styled.Content>
    </Styled.Wrapper>
  );
};
