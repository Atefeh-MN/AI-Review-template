import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar/NavbarComp";
import Main from "../components/Main";

const LandingLayout = ({ children }) => (
  <Main>
    <NavbarComponent/>
    {children}
    <Outlet />
  </Main>
);

export default LandingLayout;
