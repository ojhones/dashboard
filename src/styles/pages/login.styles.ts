import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Container = styled(C.Flex)`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 4rem);
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 4rem);

  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const Login = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 28rem;
  padding: 3rem 2rem;

  gap: 2rem;

  flex-direction: column;
  justify-content: center;

  border-radius: 8px;

  background-color: ${colors.white};

  > a:last-of-type {
    align-self: flex-end;

    text-decoration: none;
  }

  @media (max-width: 479px) {
    max-width: 100%;
    min-height: 100vh;

    border-radius: 0;

    overflow-y: auto;
  }
`;

export const WrapperLogin = styled(C.Flex)`
  flex-direction: column;

  > p {
    color: ${colors.gray[300]};

    > a {
      margin-left: 0.25rem;
      text-decoration: none;
      color: ${colors.gray[500]};
    }
  }

  > h2 {
    color: ${colors.gray[500]};
  }
`;
