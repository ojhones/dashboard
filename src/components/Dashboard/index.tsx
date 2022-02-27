import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { Header, DrawerMenuDesktop } from '~/components';

import * as S from './styles';

interface DashboardProps {
  children?: ReactNode;
}

const PATHS_WITHOUT_DASHBOARD = ['/'];

export function Dashboard({ children }: DashboardProps) {
  const { asPath } = useRouter();

  if (PATHS_WITHOUT_DASHBOARD.includes(asPath)) {
    return <>{children}</>;
  }

  return (
    <S.Container>
      <DrawerMenuDesktop />

      <S.Wrapper>
        <Header />

        <S.InternalContent>{children}</S.InternalContent>
      </S.Wrapper>
    </S.Container>
  );
}
