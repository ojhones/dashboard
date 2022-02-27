import { ReactNode } from 'react';

import { cache } from '@emotion/css';
import { useAmp } from 'next/amp';
import { CacheProvider } from '@emotion/react';

import { DefaultTheme } from './GlobalStyles';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const isAmp = useAmp();

  if (isAmp) {
    return (
      <CacheProvider value={cache}>
        <DefaultTheme>{children}</DefaultTheme>
      </CacheProvider>
    );
  }

  return <DefaultTheme>{children}</DefaultTheme>;
}
