import React from "react";
import { useRoutes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import  { Router } from "./routes";

import { ThemeProvider } from "./contexts/ThemeContext";
import { LayoutProvider } from "./contexts/LayoutContext";


const App = () => {
 

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="AI Ecommerce Content Template"
        defaultTitle="AI Ecommerce Content"
      />
        <ThemeProvider>
            <LayoutProvider>
          <Router/>      
            </LayoutProvider>
        </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;

