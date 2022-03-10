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
  padding: 1rem;
  border-radius: 0.25rem;

  align-items: center;
  justify-content: space-between;

  background-color: ${colors.white};

  a {
    font-size: 0.8rem;
    margin-left: 0.5rem;

    svg {
      width: 1rem;
      height: auto;
      color: ${colors.green[500]};
    }
  }
`;
