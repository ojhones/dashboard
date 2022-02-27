import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Menu = styled(C.Menu)``;

export const MenuButton = styled(C.MenuButton)`
  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      margin-right: 0.5rem !important;

      border-radius: 50%;
    }

    > p {
      width: 100%;
      max-width: 10rem;
      margin: 0 0.5rem;

      font-size: 1rem;
      font-weight: 500;
      color: ${colors.gray[300]};
    }

    > svg {
      color: ${colors.gray[300]};
    }
  }

  &:hover {
    > span {
      > p,
      svg {
        color: ${colors.gray[500]};
      }
    }
  }
`;

export const MenuList = styled(C.MenuList)`
  margin: 1.5rem 0;

  right: 0;
`;

export const MenuItem = styled(C.MenuItem)``;
