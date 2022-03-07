import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Tooltip = styled(C.Tooltip)`
  padding: 0.75rem;
  margin-top: -0.3rem;

  border-radius: 4px;
  color: ${colors.gray[500]};
  background-color: ${colors.white};
`;

export const Drawer = styled(C.Drawer)`
  display: none;

  @media (max-width: 991px) {
    display: flex;
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

export const MenuButton = styled(C.Button)`
  left: 0;
  bottom: 0;
  position: absolute;

  width: 4rem;
  height: 4rem;
  min-width: 4rem;

  display: none;
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

    &:hover {
      color: ${colors.gray[500]};
    }
  }

  &:hover,
  &:focus {
    box-shadow: none;
    background-color: ${colors.white};
  }

  @media (max-width: 991px) {
    display: flex;
  }
`;

export const DrawerBody = styled(C.DrawerBody)`
  padding: 0.5rem 0;
`;

export const DrawerFooter = styled(C.DrawerFooter)``;

export const DrawerHeader = styled(C.DrawerHeader)`
  height: 4rem;
  padding: 1rem 0;
`;

export const DrawerOverlay = styled(C.DrawerOverlay)``;

export const DrawerContent = styled(C.DrawerContent)``;

export const DrawerCloseButton = styled(C.DrawerCloseButton)`
  top: 1rem;
  right: 1rem;

  > svg {
    color: ${colors.gray[300]};
  }

  &:hover,
  &:focus {
    box-shadow: none;
    background-color: ${colors.white};
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

      &:hover {
        color: ${colors.gray[500]};
      }
    }
  }
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
