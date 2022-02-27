import {
  Th,
  Td,
  Flex,
  Thead,
  Tbody,
  // Tfoot,
  Image,
  TableCaption,
  Tr as TrChakra,
  Table as TableChakra,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '~/styles/theme/colors';

export const Container = styled(Flex)`
  width: 100%;
  height: auto;
  flex-direction: column;
`;

export const Wrapper = styled(Flex)`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  padding-bottom: 0.8rem;

  gap: 3rem;
  align-items: center;
  flex-direction: column;
  background: ${colors.white};

  @media (max-width: 950px) {
    overflow-x: scroll;
    align-items: flex-start;
  }
`;

export const WrapperDefaultLink = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const Table = styled(TableChakra)`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

export const SubTitleTable = styled(TableCaption)`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableHead = styled(Thead)``;

export const TColumnHead = styled(Th)`
  font-size: 1rem;
  text-align: left;
  padding: 0.75rem;
  font-weight: 600;
  word-break: normal;
  line-height: 1.3125rem;
  letter-spacing: 0.015em;
  text-transform: capitalize;
`;

export const TableRows = styled(TrChakra)`
  width: 100%;
  height: auto;
`;

export const TableBody = styled(Tbody)`
  width: 100%;
  height: auto;
`;

export const TColumnBody = styled(Td)`
  padding: 0.8rem 0.75rem;

  div {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-size: 1rem;
    font-weight: 400;
    text-align: right;
    word-break: normal;
    line-height: 1.3125rem;
    letter-spacing: 0.015em;
    text-transform: capitalize;
  }
`;

export const CoinImage = styled(Image)`
  border-radius: 50%;
  width: 2.109375rem;
  height: 2.109375rem;
  margin: 0 0.596875rem;

  object-fit: cover;
`;
