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

export const WrapperButtons = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;

  flex-wrap: wrap;
  align-items: center;

  background: ${colors.white};
`;

export const WrapperBreadCrumb = styled(C.Flex)`
  margin-bottom: 1rem;
`;

export const WrapperContentInput = styled(C.Flex)`
  width: 100%;
  height: auto;

  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const WrapperInputs = styled(C.Flex)`
  width: 49.5%;
  height: auto;
  padding: 1rem;
  border-radius: 0.25rem;

  gap: 1rem;
  flex-direction: column;

  background: ${colors.white};

  @media (max-width: 1692px) {
    width: 100%;
  }
`;

export const WrapperMultipleInputs = styled(C.Flex)`
  width: 100%;
  height: auto;

  gap: 1rem;

  @media (max-width: 1692px) {
    flex-direction: column;
  }
`;
