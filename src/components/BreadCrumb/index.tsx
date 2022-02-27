import Link from 'next/link';

import * as S from './styles';

interface Path {
  id: number;
  url: string;
  title: string;
  isCurrentPage?: boolean;
}

interface BreadCrumbProps {
  paths: Path[];
}

export function BreadCrumb({ paths }: BreadCrumbProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Breadcrumb separator="/">
          {paths.map((path) => (
            <S.BreadcrumbItem key={path.id} isCurrentPage={path.isCurrentPage}>
              <Link href={path.url}>
                <a>{path.title}</a>
              </Link>
            </S.BreadcrumbItem>
          ))}
        </S.Breadcrumb>
      </S.Wrapper>
    </S.Container>
  );
}
