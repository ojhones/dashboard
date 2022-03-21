import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

// import { colors } from '~/styles/theme/colors';

export const Container = styled(C.Flex)`
  width: 100%;
  min-height: calc(100vh - 6rem);

  overflow-x: hidden;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  min-height: calc(100vh - 6rem);

  gap: 1rem;
  flex-direction: column;

  h2 {
    margin: 0;
  }
`;
