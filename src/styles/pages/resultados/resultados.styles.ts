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

export const WrapperMetrics = styled(C.Flex)`
  width: 100%;
  height: auto;

  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Content = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-top: 3rem;

  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const WrapperNavigation = styled(C.Flex)`
  width: 10rem;
  height: auto;

  gap: 1rem;
  flex-direction: column;

  h2 {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ChartsContent = styled(C.Flex)`
  width: 22.5%;
  height: auto;

  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const WrapperChart = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 1rem;

  background: ${colors.white};

  + div {
    margin-top: 1rem;
  }
`;

export const LargerChart = styled(C.Flex)`
  width: 43.3%;
  height: auto;

  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const WrapperPersons = styled(C.Flex)`
  flex: 1;
  gap: 1rem;
  flex-direction: column;

  h2 {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
