import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Tooltip = styled(C.Tooltip)`
  padding: 0.75rem;
  margin-left: -0.83rem;
  margin-top: -0.3rem;

  border-radius: 4px;
  color: ${colors.gray[500]};
  background-color: ${colors.white};
`;

export const Accordion = styled(C.Accordion)`
  width: 100%;

  justify-content: space-between;
`;

export const AccordionItem = styled(C.AccordionItem)`
  button {
    p,
    svg {
      color: ${colors.gray[300]};
    }
  }

  > h2 {
    color: ${colors.gray[300]};

    :hover {
      color: ${colors.gray[500]};
    }
    margin: 0;
  }
`;

export const AccordionButton = styled(C.AccordionButton)`
  &:focus,
  &:hover {
    box-shadow: none;
    background-color: transparent;
  }
`;

export const AccordionPanel = styled(C.AccordionPanel)`
  padding: 0.25rem;
`;

export const AccordionIcon = styled(C.AccordionIcon)``;

export const AccordionTitle = styled(C.Text)`
  display: flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;

  svg {
    :first-of-type {
      width: 1.5rem;
      height: 1.5rem;
      min-width: 1.5rem;

      margin-left: 0.22rem;
      margin-right: 0.8rem;
    }
  }
`;
