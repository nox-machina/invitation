"use client"

// import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { usePathname } from "next/navigation";

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
      <head>
        <title>Aaron & Louise</title>
        <meta name="description" content="Wedding Invite" />
      </head>
      <ThemeProvider theme={theme}>
        <body>
          {/* <header>{path == "/auth" ? <></> : <Navbar />}</header> */}
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
