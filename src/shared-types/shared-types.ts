import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { LoadProductVariables } from '../api/load-products';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  color?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type NavLinksProps = {
  authenticated?: boolean;
};

export type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  onInputChange?: (value: string) => void;
  disabled?: boolean;
  errorMessage?: string;
  value?: string;
  icon?: React.ReactNode;
  as?: 'input' | 'textarea';
  reference?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;

export type FormLoginProps = {
  errorMessage?: string;
  onLogin?: (email: string, password: string) => Promise<void>;
};

export type FormRegisterProps = {
  errorMessage?: string;
  onRegister?: (
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    telephone: string,
    address: string,
  ) => Promise<void>;
};

export type ProductQueryProps = {
  data: ProductProps;
  types: ProductTypesProps;
  variables?: LoadProductVariables;
};

export type ProductsByTypeQueryProps = {
  data: ProductGridPropsProducts;
  types: ProductTypesProps;
  variables?: LoadProductVariables;
};

export type ProductDataProps = {
  product: ProductProps;
};

export type ProductProps = {
  data: ProductCardArrayProps;
};

export type ProductCardProps = {
  attributes: ProductAttributesProps;
};

export type ProductAttributesProps = {
  name: string;
  description: string;
  price: number;
  stock: number;
  cover: StrapiImage;
  product_type: ProductTypeProps;
};

export type StrapiImage = {
  data: StrapiImageData;
};

export type StrapiImageData = {
  attributes: StrapiImageAttributes;
};

export type StrapiImageAttributes = {
  url: string;
};

export type ProductTypeDataProps = {
  productType: ProductTypeProps;
};

export type ProductTypeProps = {
  data: ProductTypePropsData;
};

export type ProductTypePropsData = {
  id: string;
  attributes: ProductTypePropsAttributes;
};

export type ProductTypePropsAttributes = {
  title: string;
};

export type ProductsProps = {
  data: ProductGridProps;
};

export type ProductGridProps = {
  products: ProductGridPropsProducts;
};

export type ProductGridPropsProducts = {
  data: ProductCardArrayProps[];
};

export type ProductCardArrayProps = ProductCardProps & {
  id?: string;
};

export type TypesProps = {
  data: NavBarProps;
};

export type NavBarProps = {
  productTypes: ProductTypesProps;
};

export type ProductTypesProps = {
  data: ProductTypePropsData[];
};

export type UserProps = {
  data: {
    usersPermissionsUser: UserPermissionProps;
  };
};

export type UserPermissionProps = {
  data: {
    id: string;
    attributes: ProfileComponentProps;
  };
};

export type ProfileLinkProps = {
  username: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  onSubmit?: (
    username?: string,
    email?: string,
    telephone?: string,
    address?: string,
  ) => Promise<void>;
};

export type ProfileComponentProps = {
  puchase: PurchaseProps;
  cart_quantity: CartQuantityProps;
  confirmed?: boolean;
  favorite: FavoriteProps;
  redirect?: string | null;
} & ProfileLinkProps;

export type CartQuantityProps = {
  data: {
    id: string;
    attributes: {
      cartQuantity: CartQuantityAttributesProps[];
    };
  };
};

export type FavoriteProps = {
  data: {
    id: string;
    attributes: {
      products: ProductGridPropsProducts;
    };
  };
};

export type CartQuantityAttributesProps = {
  id: string;
  quantity: number;
  product: ProductProps;
};

export type PurchaseProps = {
  data: PurchaseDataProps;
};

export type PurchaseDataProps = {
  id: string;
  attributes: PurchaseAttributesProps;
};

export type PurchaseAttributesProps = {
  Item: ItemProps[];
};

export type ItemProps = {
  id: string;
  Quantity: number;
  date: string;
  product: ProductProps;
};
