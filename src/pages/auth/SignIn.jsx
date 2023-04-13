import React from "react";
import { Helmet } from "react-helmet-async";
import { Card ,} from "react-bootstrap";

import SignIn from "../../components/auth/SignIn";
import avatar from "../../assets/img/avatars/avatar.jpg";
import Container from 'react-bootstrap/Container';

const SignInPage = () => (
  <React.Fragment>
    <Helmet title="Sign In" />
    <Container fluid >
      <Card>
        <Card.Body>
           <Card.Title></Card.Title>
          <SignIn/>
         </Card.Body>
      </Card>
    </Container>

   
  </React.Fragment>
);

export default SignInPage;
