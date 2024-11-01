"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const ThemeWrapper = ({ children }) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  );
};

export default ThemeWrapper;
