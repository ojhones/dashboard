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

  gap: 1rem;
  flex-direction: column;

  h2 {
    margin: 0;
  }
`;

export const WrapperFilterType = styled(C.Flex)`
  width: auto;
  height: auto;

  gap: 1rem;
  align-items: center;
`;

export const WrapperFilters = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 1rem;
  border-radius: 0.5rem;

  align-items: center;
  justify-content: space-between;

  background-color: ${colors.white};

  @media (max-width: 991px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const WrapperType = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 0 0.25rem;

  gap: 1rem;
`;

export const WrapperOptions = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 8.5rem;

  gap: 1rem;
`;

export const WrapperSearch = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-top: 0.25rem;
  padding-right: 0.25rem;

  align-items: center;
  justify-content: space-between;
`;

export const WrapperButtonsSearch = styled(C.Flex)`
  width: auto;
  height: auto;

  gap: 1rem;
  align-items: center;
`;

export const Content = styled(C.Flex)`
  flex: 1;

  gap: 1rem;
  flex-direction: column;
`;

export const WrapperImageDefault = styled(C.Flex)`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  span {
    font-size: 2rem;
    max-width: 15rem;
    margin-right: -3%;
  }
`;

export const ImageDefault = styled(C.Image)`
  width: 100%;
  height: auto;
  max-width: 25rem;

  object-fit: cover;
`;

export const WrapperExport = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: space-between;
`;

export const WrapperInputSearch = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: space-between;
`;

export const Form = styled(C.Flex)`
  width: auto;
  padding-left: 0.05rem;

  gap: 0.5rem;
  align-items: center;
`;
