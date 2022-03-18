import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Container = styled(C.Flex)``;

export const Wrapper = styled(C.Flex)``;

export const Breadcrumb = styled(C.Breadcrumb)``;

export const BreadcrumbItem = styled(C.BreadcrumbItem)`
  a {
    font-size: 0.9rem;
    text-decoration: none;

    :hover {
      font-weight: 500;
    }
  }
`;
