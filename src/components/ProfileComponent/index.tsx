import { useEffect, useState } from 'react';
import { ProfileComponentProps } from '../../shared-types/shared-types';
import { CartLink } from '../CartLink';
import { FavoriteLink } from '../FavoriteLink';
import { MenuLink } from '../MenuLink';
import { ProfileLink } from '../ProfileLink';
import { PurchaseLink } from '../PurchaseLink';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Heading } from '../Heading';
import Link from 'next/link';

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* istanbul ignore else */
    if (redirect) {
      setNavState(redirect);
    }
  }, [redirect]);

  return (
    <Styled.Wrapper>
      <Styled.Button
        onClick={() => setVisible(!visible)}
        aria-label="Open/Close Menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Button>
      <Styled.Nav visible={visible} onClick={() => setVisible(!visible)}>
        <Styled.NavBar>
          <Link href="/">
            <a>
              <Heading size="medium">SANTI</Heading>
            </a>
          </Link>
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
