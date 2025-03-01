type ThemeName = "light" | "dark" | string;

export const useGetThemeColor = (themeName: ThemeName, colorName: string) => {
  const variable = `--${themeName}-${colorName}`;

  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};
