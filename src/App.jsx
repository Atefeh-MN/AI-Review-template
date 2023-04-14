import React from "react";
import { useRoutes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import  { Router } from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import { AuthProvider } from "./contexts/JWTContext";
import { SidebarProvider } from "./contexts/SidebarContext";

const App = () => {

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="AI Ecommerce Content Template"
        defaultTitle="AI Ecommerce Content"
      />
      <ThemeProvider>
        <SidebarProvider>
        <LayoutProvider>
          <AuthProvider>
            <Router /> 
            </AuthProvider>
          </LayoutProvider>
          </SidebarProvider>
        </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;

