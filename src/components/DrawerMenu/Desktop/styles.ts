import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

interface MenuButtonProps {
  isopen?: boolean;
}

export const Container = styled(C.Flex)<MenuButtonProps>`
  width: 100%;
  height: 100%;
  max-width: 17rem;
  min-height: 100vh;

  transition: max-width 0.4s;
  background: ${colors.white};
  border-right: 1px solid ${colors.gray[200]};

  &.closed {
    max-width: 4rem;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: 100%;

  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuButton = styled(C.Button)`
  top: 0;
  right: 0;
  position: absolute;

  width: 4rem;
  height: 4rem;
  min-width: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  background-color: ${colors.white};

  svg {
    width: 1.5rem;
    height: 1.5rem;
    min-width: 1.5rem;

    object-fit: cover;

    color: ${colors.gray[300]};

    :hover {
      color: ${colors.gray[500]};
    }
  }

  &:hover,
  &:focus {
    box-shadow: none;
    background-color: ${colors.white};
  }
`;

export const Tooltip = styled(C.Tooltip)`
  padding: 0.75rem;
  margin-top: -0.3rem;

  border-radius: 4px;
  color: ${colors.gray[500]};
  background-color: ${colors.white};
`;

export const Header = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: 4rem;

  align-items: center;
  justify-content: flex-start;
`;

export const Body = styled(C.Flex)`
  width: 100%;
  height: 100%;
  padding-top: 0.5rem;

  flex-direction: column;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled.ul`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;

  border-radius: 4px;

  list-style: none;

  > a {
    width: 100%;
    height: 100%;
    padding: 0 1.2rem;

    display: flex;
    align-items: center;
    text-decoration: none;

    > p {
      padding: 0;
      min-width: 2rem;

      display: flex;
      align-items: center;

      font-size: 1rem;
      font-weight: 500;
      color: ${colors.gray[300]};

      > svg {
        width: 1.5rem;
        height: 1.5rem;
        min-width: 1.5rem;
        margin-right: 0.5rem;

        object-fit: cover;
      }
    }
  }
`;

export const Item = styled(C.Flex)`
  width: 100%;
  height: 2.5rem;

  display: flex;
  align-items: center;

  border-radius: 4px;

  list-style: none;

  > a {
    width: 100%;
    height: 100%;
    padding: 0 1.2rem;

    display: flex;
    align-items: center;
    text-decoration: none;

    > p {
      padding: 0;
      min-width: 2rem;

      display: flex;
      align-items: center;

      font-size: 1rem;
      font-weight: 500;
      color: ${colors.gray[300]};

      > svg {
        width: 1.5rem;
        height: 1.5rem;
        min-width: 1.5rem;
        margin-right: 0.5rem;

        object-fit: cover;
      }
    }
  }
`;

export const Footer = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: 4rem;
  padding: 1rem;

  align-items: center;
`;

export const ListAccordion = styled(C.ListItem)`
  padding: 0;
  min-width: 2rem;
  margin-left: 3.5rem;

  display: flex;
  align-items: center;

  font-size: 0.9rem;
  color: ${colors.gray[300]};

  :hover {
    cursor: pointer;
    color: ${colors.gray[500]};
  }
`;
