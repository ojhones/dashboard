import { BsWhatsapp } from 'react-icons/bs';

import * as S from './styles';

interface SmallMetricsCardProps {
  url: string;
  name: string;
  target: '_blank' | '_self' | string;
}

export function SmallMetricsCard({ url, name, target }: SmallMetricsCardProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <a>{name}</a>

        <a href={url} target={target} rel="noreferrer">
          <BsWhatsapp />
        </a>
      </S.Wrapper>
    </S.Container>
  );
}
