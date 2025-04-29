import React from 'react';
import { darkTheme, lightTheme } from '@/constants/Color';
export const ThemeContext = React.createContext<any | null>(null);

export interface ThemeType {
  colorScheme: 'dark' | 'light';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    background_modal: string;
    input: string;
    card: string;
    border: string;
    disable_outer: string;
    disable_inner: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    error: string;
    confirm: string;
    warning: string;
    link: string;
    input2: string;
    primaryUsdt: string;
    secondaryUsdt: string;
  };
}

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
