import React, { InputHTMLAttributes } from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  color?: boolean;
  onClick?: () => void;
};

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
