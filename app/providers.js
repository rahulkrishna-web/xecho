'use client';

import ThemeProvider from "@/components/context/themeProvider";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}