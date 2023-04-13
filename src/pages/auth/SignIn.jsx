import React from "react";
import { Helmet } from "react-helmet-async";
import { Card ,} from "react-bootstrap";

import SignIn from "../../components/auth/SignIn";
import { useTranslation } from "react-i18next";
import { Col} from "react-bootstrap";
import { Link } from "react-router-dom";
const SignInPage = () =>
{
  const { t } = useTranslation();
  return ( <React.Fragment>
    <Helmet title="Sign In" />
        <Col sm="0" md="6" lg="5" className="mx-auto d-flex flex-column  align-items-start mt-3">
      <div style={{ width: "100%" }}>
         <Card.Title className="mb-3" style={{ color: "#A7A3FF", fontSize: '1rem' }}>{t( 'welcome' )}</Card.Title>
        <h2>{t( "h1signIn" )}</h2>
          <h3 className="mb-3">{t( "h3signIn" )}</h3>
        <h5>{t( "h5signIn" )} {t( "h5signIn2" )} <Link>{t( "registerHere" )}</Link></h5>
      </div>
      
      <img style={{ width: "100%" }} src="../../src/assets/img/illustrations/pose_45.png" />
    
            </Col>
          <Col sm="10" md="6" lg="5" className="mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <Card>
      <Card.Header className="d-flex justify-content-center align-items-center flex-column mt-4">
        <Card.Title style={{ color: "#A7A3FF", fontSize: '1.5rem' }}>{t( 'signIn' )}</Card.Title>
      </Card.Header>
      <Card.Body>
        <SignIn />
      </Card.Body>
    </Card>
            </div>
    </Col>
    
         
            
           

   
  </React.Fragment>
  )
};

export default SignInPage;
