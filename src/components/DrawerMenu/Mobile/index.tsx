import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDisclosure } from '@chakra-ui/react';

import { AiOutlineMenu } from 'react-icons/ai';

import { MenuItems } from '~/config/DrawerMenu';

import { AccordionMenu } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export function DrawerMenuMobile() {
  const { asPath } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [asPath, onClose]);

  return (
    <>
      <S.MenuButton colorScheme="teal" onClick={onOpen}>
        <AiOutlineMenu />
      </S.MenuButton>
      <S.Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <S.DrawerOverlay />
        <S.DrawerContent>
          <S.DrawerCloseButton />
          <S.DrawerHeader>
            <Image
              alt="logo"
              width={150}
              height={40}
              objectFit="contain"
              src="/images/svg/logo-abvaq.svg"
            />
          </S.DrawerHeader>

          <S.DrawerBody>
            {MenuItems.map((MenuItem) =>
              MenuItem.subItems.length > 0 ? (
                <AccordionMenu
                  key={MenuItem.id}
                  title={MenuItem.title}
                  icon={MenuItem.icon}
                  isOpenedMenu={isOpen}
                >
                  <C.List spacing={1.5}>
                    {MenuItem.subItems.map((subMenuItem) => (
                      <>
                        <Link href={subMenuItem.slug} key={subMenuItem.id}>
                          <C.Text isTruncated>
                            <S.ListAccordion key={subMenuItem.id}>
                              {subMenuItem.title}
                            </S.ListAccordion>
                          </C.Text>
                        </Link>
                      </>
                    ))}
                  </C.List>
                </AccordionMenu>
              ) : (
                <S.ListItem key={MenuItem.id}>
                  <Link href={MenuItem.slug}>
                    <a>
                      <C.Text as="p" isTruncated>
                        {MenuItem.icon}
                        {MenuItem.title}
                      </C.Text>
                    </a>
                  </Link>
                </S.ListItem>
              )
            )}
          </S.DrawerBody>

          <S.DrawerFooter />
        </S.DrawerContent>
      </S.Drawer>
    </>
  );
}
