import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Container = styled.header`
  width: 100%;
  height: auto;
  min-height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray[200]};
`;

export const Wrapper = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuButton = styled(C.Button)`
  width: 4rem;
  height: 4rem;
  min-width: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  background-color: transparent;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    min-width: 1.5rem;

    object-fit: cover;

    color: ${colors.gray[300]};
  }

  &:hover,
  &:focus {
    box-shadow: none;
    background-color: transparent;

    > svg {
      color: ${colors.gray[500]};
    }
  }
`;

export const Tooltip = styled(C.Tooltip)`
  padding: 0.25rem 0.5rem;
  margin-top: -1.25rem;

  border-radius: 4px;

  font-size: 0.75rem;
  color: ${colors.gray[500]};
  background-color: ${colors.white};
`;
