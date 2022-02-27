import Image from 'next/image';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { FaUser } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';

export function Profile() {
  const avatar = false;

  return (
    <S.Menu>
      <S.MenuButton>
        {avatar ? (
          <Image
            width={32}
            height={32}
            alt="Profile"
            className="image-profile"
            src="/images/svg/avatar.svg"
          />
        ) : (
          <FaUser width={32} height={32} />
        )}

        <C.Text as="p" isTruncated>
          Vítor Emanuel Queiroz Ferreira
        </C.Text>

        <BiChevronDown />
      </S.MenuButton>

      <S.MenuList shadow="md">
        <S.MenuItem>Item 1</S.MenuItem>
        <S.MenuItem>Item 2</S.MenuItem>
        <S.MenuItem>Item 3</S.MenuItem>
        <S.MenuItem>Item 4</S.MenuItem>
        <S.MenuItem>Item 5</S.MenuItem>
      </S.MenuList>
    </S.Menu>
  );
}
