import {
  useState,
  useEffect,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

type DrawerMenu = {
  isOpenMenu: boolean;
  setIsOpenMenu: (props: SetStateAction<boolean>) => void;
};

type DrawerMenuProps = {
  children: ReactNode;
};

const DrawerMenu = createContext({} as DrawerMenu);

const DrawerMenuProvider = ({ children }: DrawerMenuProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  useEffect(() => {
    setIsOpenMenu(true);
  }, []);

  return (
    <DrawerMenu.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </DrawerMenu.Provider>
  );
};

function useDrawerMenu() {
  const context = useContext(DrawerMenu);

  if (!context) {
    throw new Error('Drawer Menu must exist to open DrawerMenu');
  }

  return context;
}

export { DrawerMenuProvider, useDrawerMenu };
