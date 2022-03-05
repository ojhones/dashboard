import Link from 'next/link';
import React, { ReactNode } from 'react';

import * as S from './styles';

import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

interface AccordionProps {
  slug?: string;
  title: string;
  icon?: ReactNode;
  children?: ReactNode;
  isOpenedMenu?: boolean;
}

export function AccordionMenu({
  icon,
  slug,
  title,
  children,
  isOpenedMenu,
}: AccordionProps) {
  return (
    <S.Tooltip
      label={title}
      placement="right-start"
      isDisabled={isOpenedMenu ? true : false}
    >
      <S.Accordion allowToggle>
        <S.AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <S.AccordionButton>
                  <S.AccordionTitle
                    as="p"
                    flex="1"
                    textAlign="left"
                    isTruncated
                  >
                    {!isOpenedMenu ? (
                      <Link href={slug || ''}>{icon}</Link>
                    ) : (
                      <>{icon}</>
                    )}

                    {title}
                  </S.AccordionTitle>

                  {isExpanded
                    ? isOpenedMenu && <MdOutlineKeyboardArrowUp />
                    : isOpenedMenu && <MdOutlineKeyboardArrowDown />}
                </S.AccordionButton>
              </h2>
              {isOpenedMenu && (
                <S.AccordionPanel dionPanel>{children}</S.AccordionPanel>
              )}
            </>
          )}
        </S.AccordionItem>
      </S.Accordion>
    </S.Tooltip>
  );
}
