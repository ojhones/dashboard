import { ReactNode } from 'react';

import * as S from './styles';

interface MetricsCardProps {
  footer: string;
  quantity: number;
  category: string;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
}

export function MetricsCard({
  footer,
  leftIcon,
  category,
  quantity,
  rightIcon,
}: MetricsCardProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.WrapperFirstIcon>{leftIcon}</S.WrapperFirstIcon>

          <S.WrapperSecondIcon>{rightIcon}</S.WrapperSecondIcon>
        </S.Header>

        <S.Body>
          <p>{category}</p>
          <strong>{quantity}</strong>
        </S.Body>

        <S.Footer>
          <p>{footer}</p>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
}
