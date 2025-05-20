import React from 'react';
import { darkTheme } from '@/constants/Color';

export interface ThemeType {
  colorScheme: 'dark' | 'light';
  colors: {
    primary: string;
    secondary: string;
    background1: string;
    background2: string;
    text1: string;
    text2: string;
    error: string;
    confirm: string;
    warning: string;
    link: string;
  };
}

export interface ThemeContextType {
  selectedTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const ThemeProvider = (props: any) => {
  const [selectedTheme, setTheme] = React.useState<ThemeType>(darkTheme);

  //   React.useLayoutEffect(() => {
  //     (async () => {
  //       try {
  //         await asyncStorage.getStringData(asyncStorageKeys.theme).then(res => {
  //           setTheme(res == 'dark' ? darkTheme : lightTheme);
  //         });
  //       } catch (e: any) {}
  //     })();
  //   }, []);

  return (
    <ThemeContext.Provider value={{ selectedTheme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
