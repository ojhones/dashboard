import { ReactNode } from 'react';
import { FilterTypeProvider } from '~/hooks/FilterType';
import { DrawerMenuProvider } from '~/hooks/DrawerMenu';
import { PersonsFilterProvider } from '~/hooks/PersonsFilter';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <FilterTypeProvider>
      <PersonsFilterProvider>
        <DrawerMenuProvider>{children}</DrawerMenuProvider>
      </PersonsFilterProvider>
    </FilterTypeProvider>
  );
}
