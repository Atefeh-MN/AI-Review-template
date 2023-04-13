import React from "react";
import { useRoutes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import  { Router } from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import { AuthProvider } from "./contexts/JWTContext";

const App = () => {

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="AI Ecommerce Content Template"
        defaultTitle="AI Ecommerce Content"
      />
        <ThemeProvider>
        <LayoutProvider>
          <AuthProvider>
            <Router /> 
            </AuthProvider>
            </LayoutProvider>
        </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;

