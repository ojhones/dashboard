import {
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

import { PartnersProps } from '~/interfaces/partner';

type TableRender = {
  searchedTable: PartnersProps[];
  setSearchedTable: (props: SetStateAction<PartnersProps[]>) => void;
};

type TableRenderProps = {
  children: ReactNode;
};

const TableRender = createContext({} as TableRender);

const TableRenderProvider = ({ children }: TableRenderProps) => {
  const [searchedTable, setSearchedTable] = useState<PartnersProps[]>([]);

  return (
    <TableRender.Provider value={{ searchedTable, setSearchedTable }}>
      {children}
    </TableRender.Provider>
  );
};

function useTableRender() {
  const context = useContext(TableRender);

  if (!context) {
    throw new Error('Table Render must exist to use Table');
  }

  return context;
}

export { TableRenderProvider, useTableRender };
