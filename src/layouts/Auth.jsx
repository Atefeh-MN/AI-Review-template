import React from "react";
import { Outlet } from "react-router-dom";

import { Container, Row } from "react-bootstrap";
import Main from "../components/Main";

const AuthLayout = ({ children }) => (
  <React.Fragment >
    <Main className="d-flex w-100 justify-content-center">
      <Container className="d-flex">
        <Row className="h-100">
          {children}
            <Outlet />
        </Row>
      </Container>
    </Main>
    {/* <Settings /> */}
  </React.Fragment>
);

export default AuthLayout;
