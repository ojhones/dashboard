import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Container = styled.header`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: 100%;

  background: ${colors.white};

  flex-wrap: wrap;

  @media (max-width: 1181px) {
    gap: 2rem;
  }
`;

export const ContentDivider = styled(C.Flex)`
  padding-right: 1.5rem;
  border-right: 1px solid ${colors.gray[100]};

  gap: 0.5rem;
  flex-direction: column;

  + div {
    padding-left: 1.5rem;
  }

  @media (max-width: 1181px) {
    border-right: none;
    + div {
      padding-left: 0;
    }
  }
`;

export const Stack = styled(C.Stack)``;

export const Checkbox = styled(C.Checkbox)`
  font-size: 1rem;
  font-weight: 400;
`;

export const Select = styled(C.Select)``;

export const RadioGroup = styled(C.RadioGroup)``;

export const Radio = styled(C.Radio)``;
