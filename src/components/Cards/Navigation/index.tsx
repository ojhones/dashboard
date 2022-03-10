import Link from 'next/link';

import * as S from './styles';

interface NavigationCardProps {
  slug: string;
  title: string;
}

export function NavigationCard({ slug, title }: NavigationCardProps) {
  return (
    <Link href={slug}>
      <S.Container>
        <S.Wrapper>
          <a>{title}</a>
        </S.Wrapper>
      </S.Container>
    </Link>
  );
}
