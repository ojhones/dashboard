import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Container = styled(C.Flex)`
  width: 100%;
  min-height: calc(100vh - 6rem);

  overflow-x: hidden;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  min-height: calc(100vh - 6rem);

  flex-direction: column;
`;

export const Content = styled(C.Flex)`
  width: 100%;
  height: auto;

  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 832px) {
    flex-direction: column;
  }
`;

export const WrapperCharts = styled(C.Flex)`
  width: 49%;
  height: auto;

  padding: 1rem;
  border-radius: 0.5rem;

  background: ${colors.white};

  @media (max-width: 832px) {
    width: 100%;
  }
`;

export const WrapperBreadCrumb = styled(C.Flex)`
  margin-bottom: 1rem;
`;

export const WrapperTable = styled(C.Flex)`
  /* width: auto;
  height: auto; */

  flex: 1;
  flex-direction: column;
`;
