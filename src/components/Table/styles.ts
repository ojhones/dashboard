import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  border-radius: 0.5rem;

  background-color: ${colors.white};
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 1rem;
`;

export const Table = styled(C.Table)``;

export const TableCaption = styled(C.TableCaption)``;

export const THead = styled(C.Thead)``;

export const THeadyCollum = styled(C.Th)`
  padding: 0 1.5rem 0.5rem 0;

  &:last-of-type {
    padding-right: 0;
  }
`;

export const TBody = styled(C.Tbody)``;

export const TBodyCollum = styled(C.Td)`
  padding: 0.5rem 0;
`;

export const TRows = styled(C.Tr)``;

export const ButtonOrder = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  font-size: 0.875rem;
  color: ${colors.black};
  text-transform: uppercase;

  &.ascending::after {
    content: '👇';
    display: inline-block;
    margin-left: 1em;
  }

  &.descending::after {
    content: '☝️';
    display: inline-block;
    margin-left: 1em;
  }
`;
