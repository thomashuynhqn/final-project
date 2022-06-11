import { SettingsProvider } from "./contexts/SettingsContext";
import "./languages";
import store, { persistor } from "./store";
import { StyledEngineProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "../src/App";

const anchorOrigin = {
  vertical: "top",
  horizontal: "right",
};

const root = createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <StyledEngineProvider injectFirst>
          <SettingsProvider>
            <StoreProvider store={store}>
              <PersistGate persistor={persistor} loading={null}>
                <SnackbarProvider anchorOrigin={anchorOrigin}>
                  <App />
                </SnackbarProvider>
              </PersistGate>
            </StoreProvider>
          </SettingsProvider>
        </StyledEngineProvider>
      </HelmetProvider>
    </Router>
  </React.StrictMode>
);
