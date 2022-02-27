import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const FormControl = styled(C.FormControl)``;

export const FormLabel = styled(C.FormLabel)`
  color: ${colors.gray[500]};
`;

export const Icon = styled(C.Icon)`
  width: 100%;
  height: 100%;

  color: ${colors.gray[300]};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  > svg {
    color: ${colors.gray[300]};
  }
`;

export const Input = styled(C.Input)`
  padding-left: 2.25rem;

  font-weight: 400;
  color: ${colors.gray[500]};

  &:focus {
    border-color: ${colors.green[500]}90;
    box-shadow: 0 0 0 1px ${colors.green[500]}90;
  }
`;

export const InputGroup = styled(C.InputGroup)`
  display: flex;
  align-items: center;
`;

export const InputLeftElement = styled(C.InputLeftElement)`
  height: 100%;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputRightElement = styled(C.InputRightElement)`
  height: 100%;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
