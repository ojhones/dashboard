import { ReactNode } from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { colors } from './colors';

interface DefaultThemeProps {
  children: ReactNode;
}

const theme = extendTheme({
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },

      '@media (max-width: 1080px)': {
        html: {
          // fontSize: '93.75%',
        },
      },

      '@media (max-width: 767px)': {
        html: {
          // fontSize: '87.5%',
        },
      },

      body: {
        overflow: 'overlay',
        bg: `${colors.gray[100]}`,
      },

      'body, input, textarea, select, button': {
        font: "400 1rem 'Roboto', sans-serif",
      },

      'h1, h2, h3, h4, h5, p, strong, a': {
        color: `${colors.black}`,
      },

      button: {
        border: 'none',
        cursor: 'pointer',
        background: `${colors.white}`,
      },
    },
  },
});

export function DefaultTheme({ children }: DefaultThemeProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      {children}
    </ChakraProvider>
  );
}
