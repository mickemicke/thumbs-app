"use client";

import { createTheme, ThemeProvider } from "@mui/material";

export default function MyProvider(props: { children: React.ReactNode }) {
  const theme = createTheme();
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
