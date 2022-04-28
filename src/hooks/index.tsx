import { ReactNode } from 'react';

import { FilterTypeProvider } from '~/hooks/FilterType';
import { DrawerMenuProvider } from '~/hooks/DrawerMenu';
import { TableRenderProvider } from '~/hooks/TableRender';
import { PersonsFilterProvider } from '~/hooks/PersonsFilter';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <FilterTypeProvider>
      <TableRenderProvider>
        <PersonsFilterProvider>
          <DrawerMenuProvider>{children}</DrawerMenuProvider>
        </PersonsFilterProvider>
      </TableRenderProvider>
    </FilterTypeProvider>
  );
}
