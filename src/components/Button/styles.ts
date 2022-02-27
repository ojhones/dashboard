import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Container = styled(C.Flex)``;

export const Wrapper = styled(C.Flex)``;

export const Button = styled(C.Button)`
  color: ${colors.white};
  background-color: ${colors.green[500]};

  :hover {
    background-color: ${colors.green[800]};
  }

  :disabled {
    background-color: ${colors.green[500]};
  }
`;
