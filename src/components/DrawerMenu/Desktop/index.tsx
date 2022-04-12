import Link from 'next/link';
import Image from 'next/image';

import { MenuItems } from '~/config/DrawerMenu';

import { AccordionMenu } from '~/components';
import { useDrawerMenu } from '~/hooks/DrawerMenu';

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export function DrawerMenuDesktop() {
  const { isOpenMenu, setIsOpenMenu } = useDrawerMenu();

  return (
    <S.Container className={isOpenMenu ? '' : 'closed'}>
      <S.Wrapper>
        <S.Header>
          <Image
            alt="Logo"
            width={150}
            height={40}
            objectFit="contain"
            src="/images/png/logo.png"
          />

          <S.MenuButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
            {isOpenMenu ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
          </S.MenuButton>
        </S.Header>

        <S.Body>
          {MenuItems.map((MenuItem) =>
            MenuItem.subItems.length > 0 ? (
              <AccordionMenu
                key={MenuItem.id}
                icon={MenuItem.icon}
                slug={MenuItem.slug}
                title={MenuItem.title}
                isOpenedMenu={isOpenMenu}
              >
                <C.List spacing={2}>
                  {MenuItem.subItems.map((subMenuItem) => (
                    <S.ListAccordion key={subMenuItem.id}>
                      <Link href={subMenuItem.slug}>
                        <a>
                          <C.Text isTruncated>{subMenuItem.title}</C.Text>
                        </a>
                      </Link>
                    </S.ListAccordion>
                  ))}
                </C.List>
              </AccordionMenu>
            ) : (
              <S.Item key={MenuItem.id}>
                <Link href={MenuItem.slug}>
                  <a>
                    <S.Tooltip
                      label={MenuItem.title}
                      placement="right-start"
                      isDisabled={isOpenMenu ? true : false}
                    >
                      <C.Text as="p" isTruncated>
                        {MenuItem.icon}
                        {MenuItem.title}
                      </C.Text>
                    </S.Tooltip>
                  </a>
                </Link>
              </S.Item>
            )
          )}
        </S.Body>

        {/* <S.Footer /> */}
      </S.Wrapper>
    </S.Container>
  );
}
