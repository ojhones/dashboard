import {
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

type TableRender = {
  searchTable: string;
  setSearchTable: (props: SetStateAction<string>) => void;
};

type TableRenderProps = {
  children: ReactNode;
};

const TableRender = createContext({} as TableRender);

const TableRenderProvider = ({ children }: TableRenderProps) => {
  const [searchTable, setSearchTable] = useState('');

  return (
    <TableRender.Provider value={{ searchTable, setSearchTable }}>
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
