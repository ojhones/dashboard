import Link from 'next/link';
import { Profile } from '~/components';

import * as S from './styles';

import { ImExit } from 'react-icons/im';
import { DrawerMenuMobile } from '../DrawerMenu/Mobile';

export function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <DrawerMenuMobile />

        <Profile />

        <S.Tooltip label="Sair">
          <S.MenuButton>
            <Link href="/">
              <ImExit />
            </Link>
          </S.MenuButton>
        </S.Tooltip>
      </S.Wrapper>
    </S.Container>
  );
}
