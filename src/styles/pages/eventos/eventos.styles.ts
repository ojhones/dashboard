import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Container = styled(C.Flex)`
  width: 100%;
  min-height: calc(100vh - 4rem);

  overflow-x: hidden;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  min-height: calc(100vh - 4rem);
`;

export const WrapperButtons = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;

  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;

  background: ${colors.white};
`;

export const WrapperBreadCrumb = styled(C.Flex)`
  margin-bottom: 1rem;
`;
