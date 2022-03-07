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
              src="/images/png/logo.png"
            />
          </S.DrawerHeader>

          <S.DrawerBody>
            {MenuItems.map((MenuItem) =>
              MenuItem.subItems.length > 0 ? (
                <AccordionMenu
                  key={MenuItem.id}
                  icon={MenuItem.icon}
                  slug={MenuItem.slug}
                  title={MenuItem.title}
                  isOpenedMenu={isOpen}
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
                        isDisabled={isOpen ? true : false}
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
          </S.DrawerBody>

          <S.DrawerFooter />
        </S.DrawerContent>
      </S.Drawer>
    </>
  );
}
