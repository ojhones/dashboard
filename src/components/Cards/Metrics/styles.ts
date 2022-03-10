import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Container = styled(C.Flex)`
  height: auto;
  width: calc(25% - 0.8rem);

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  border-radius: 0.25rem;

  flex-direction: column;
  justify-content: space-between;

  background-color: ${colors.white};
`;

export const Header = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: space-between;
`;

export const WrapperFirstIcon = styled(C.Flex)`
  padding: 1rem;
  border-radius: 0.25rem;

  align-items: center;
  justify-content: center;

  background: ${colors.gray[100]};

  svg {
    width: 2rem;
    height: auto;
  }
`;

export const WrapperSecondIcon = styled(C.Flex)`
  svg {
    width: 2rem;
    height: auto;
  }
`;

export const Body = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-top: 2rem;

  flex-direction: column;
  justify-content: flex-start;

  p {
    margin-bottom: 0.25rem;
    color: ${colors.gray[500]};
  }

  strong {
    font-size: 2rem;
    color: ${colors.black};
  }
`;

export const Footer = styled(C.Flex)`
  width: 100%;
  margin-top: 2rem;
  border-top: 1px solid ${colors.gray[100]};

  p {
    margin-bottom: 0;
    margin-top: 0.5rem;
    color: ${colors.gray[500]};
  }
`;
