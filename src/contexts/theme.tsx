import { ReactNode, createContext, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode
}

interface ContextProps {
  theme: string;
  handleChangeTheme: (themeType: string) => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: "light",
  handleChangeTheme: (themeType: string) => {}
});

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");

  function handleChangeTheme(themeType: string) {
    setTheme(themeType);
  }

  return (
    <ThemeContext.Provider value={{ handleChangeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}