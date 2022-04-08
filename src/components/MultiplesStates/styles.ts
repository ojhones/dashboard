import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 14rem;

  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const Badge = styled(C.Badge)`
  position: relative;

  padding: 0.3rem;

  display: flex;
  align-items: center;
`;

export const RemoveButton = styled(C.Button)`
  top: -0.5rem;
  right: -0.4rem;
  position: absolute;

  padding: 0;
  min-width: 1px;
  max-width: 0.8125rem;
  max-height: 0.8125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  background: transparent;

  &:focus,
  &:hover {
    background: transparent;
    box-shadow: none;
    background-color: transparent;
  }

  svg {
    color: ${colors.gray[300]};

    &:hover {
      color: ${colors.gray[500]};
    }
  }
`;
