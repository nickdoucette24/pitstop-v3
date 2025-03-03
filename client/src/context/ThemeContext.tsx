import { createContext, useState, useEffect } from "react";
export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type Props = {
  children: React.ReactNode;
};

// Create Theme Context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("theme") as Theme) || "light";
  }
  return "light";
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Load theme from localStorage after mount (Prevents SSR issues)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // Apply theme to document & store it in localStorage
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
