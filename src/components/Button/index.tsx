import { JSXElementConstructor, ReactElement } from 'react';

import { ButtonProps as ButtonPropsChakra } from '@chakra-ui/react';

import * as S from './styles';

interface ButtonProps extends ButtonPropsChakra {
  title: string;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  size: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  leftIcon?:
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | undefined;
  rightIcon?:
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | undefined;
}

export function Button({
  title,
  size,
  onClick,
  leftIcon,
  rightIcon,
  isLoading,
  loadingText,
  ...rest
}: ButtonProps) {
  return (
    <S.Button
      {...rest}
      size={size}
      onClick={onClick}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      isLoading={isLoading}
      loadingText={loadingText}
    >
      {title}
    </S.Button>
  );
}
