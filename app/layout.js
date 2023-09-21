"use client";

import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { usePathname } from "next/navigation";
// import {roboto, playfair, poppins} from "../global/fonts";

export const metadata = {
  title: "Aaron & Louise",
  description: "Wedding Invite",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6C1C61",
    },
    secondary: {
      main: "#8AE9C1",
    },
  },
  typography: {
    fontFamily: ["Playfair Display", "Roboto", "Poppins"].join(","),
  },
  components: {
    MuiCssBaseline: {},
  },
});

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          <header>{path == "/auth" ? <></> : <Navbar />}</header>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
