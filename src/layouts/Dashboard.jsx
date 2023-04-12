import React from "react";
import { Outlet } from "react-router-dom";
import Main from "../components/Main";


const DashboardLayout = ({ children }) => (
  <React.Fragment>
    
      <Main>
          {children}
          <Outlet/>
      </Main>
    {/* <Settings /> */}
  </React.Fragment>
);

export default DashboardLayout;
