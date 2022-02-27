import { AppProps } from 'next/app';

import { AppProvider } from '~/hooks';
import { ThemeProvider } from '~/styles/theme';

import { Dashboard } from '~/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AppProvider>
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
