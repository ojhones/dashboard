import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Container = styled(C.Flex)`
  width: 100%;
  height: 100%;
  max-height: 100vh;

  display: flex;

  overflow: hidden;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  min-height: calc(100vh - 4rem);

  flex-direction: column;

  overflow-y: auto;
`;

export const InternalContent = styled(C.Flex)`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  h2,
  p {
    margin-bottom: 1rem;
  }
`;
