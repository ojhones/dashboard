import { useRouter } from 'next/router';
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
  const { asPath } = useRouter();
  const [currentUrl, setCurrentUrl] = useState(asPath);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (asPath !== currentUrl) {
      setIsOpenMenu(false);
      setCurrentUrl(asPath);
    }
  }, [asPath, currentUrl, isOpenMenu]);

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
