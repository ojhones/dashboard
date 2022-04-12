import { JSXElementConstructor, ReactElement } from 'react';

import * as S from './styles';

interface ButtonProps {
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
    <S.Container>
      <S.Wrapper>
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
      </S.Wrapper>
    </S.Container>
  );
}
