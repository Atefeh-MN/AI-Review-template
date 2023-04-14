import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/Main";
import Settings from "../components/Settings";
import NavbarComponent2 from "../components/sidebar/navbar/Navbar";
import dashboardItems from "../components/sidebar/dashboardItems";
import Content from "../components/Content";

const DashboardLayout = ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <Sidebar items={dashboardItems} />
      <Main>
        <NavbarComponent2 />
        <Content>
          {children}
          <Outlet />
          </Content>
      </Main>
    </Wrapper>
    <Settings />
  </React.Fragment>
);

export default DashboardLayout;
