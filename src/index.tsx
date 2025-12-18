import { createRoot } from "react-dom/client";
import App from "./components/App";
import { StrictMode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from '../src/store/store'

const root = document.getElementById("root");
if (!root) {
  throw new Error("Failed to find the root element");
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#008000",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
});

const container = createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
