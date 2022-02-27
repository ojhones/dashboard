import { ReactNode } from 'react';

import { DrawerMenuProvider } from '~/hooks/DrawerMenu';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return <DrawerMenuProvider>{children}</DrawerMenuProvider>;
}
