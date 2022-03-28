import { ReactNode } from 'react';

import { DrawerMenuProvider } from '~/hooks/DrawerMenu';
import { PersonsFilterProvider } from '~/hooks/PersonsFilter';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <PersonsFilterProvider>
      <DrawerMenuProvider>{children}</DrawerMenuProvider>
    </PersonsFilterProvider>
  );
}
