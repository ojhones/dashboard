import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
} from 'react';

type DarkTheme = {
  darkTheme: boolean;
};

type DarkThemeProps = {
  children: ReactNode;
};

const DarkTheme = createContext({} as DarkTheme);

const DarkThemeProvider = ({ children }: DarkThemeProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [currentData, setCurrentData] = useState(new Date());
  const [currentHour, setCurrentHour] = useState(currentData.getHours());

  setTimeout(() => {
    setCurrentData(new Date());
    setCurrentHour(currentData.getHours());
  }, 60000 * 30); //30 minutes

  useEffect(() => {
    if (currentHour >= 6 && currentHour < 18) {
      setDarkTheme(false);
    } else {
      setDarkTheme(true); // default is true
    }
  }, [currentHour]);

  return (
    <DarkTheme.Provider value={{ darkTheme }}>{children}</DarkTheme.Provider>
  );
};

function useDarkTheme() {
  const context = useContext(DarkTheme);

  if (!context) {
    throw new Error('Dark theme must exist to use darkTheme verification');
  }

  return context;
}

export { DarkThemeProvider, useDarkTheme };
