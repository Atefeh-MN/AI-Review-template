import React from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUp from "../../components/auth/SignUp";

const SignUpPage = () => {
  const { t } = useTranslation();
  return ( <React.Fragment>
    <Helmet title="Sign up" />
        <Col sm="0" md="6" lg="5" className="mx-auto d-flex flex-column  align-items-start mt-3">
      <div style={{ width: "100%" }}>
         <Card.Title className="mb-3" style={{ color: "#A7A3FF", fontSize: '1rem' }}>{t( 'welcome' )}</Card.Title>
        <h2>{t( "h1signUp" )}</h2>
          <h3 className="mb-3">{t( "h3signUp" )}</h3>
        <h5>{t( "signUpT1" )} {t( "h5signIn2" )} <Link to='/auth/sign-in'>{t( "loginHere" )}</Link></h5>
      </div>
      <img style={{ width: "100%" }} src="../../src/assets/img/illustrations/pose_45.png" />
    
            </Col>
          <Col sm="10" md="6" lg="5" className="mx-auto d-table h-100 mt-3">
            <div className="d-table-cell align-middle">
              <Card>
      <Card.Header className="d-flex justify-content-center align-items-center flex-column mt-4">
        <Card.Title style={{ color: "#A7A3FF", fontSize: '1.5rem' }}>{t( 'signUp' )}</Card.Title>
      </Card.Header>
      <Card.Body>
        <SignUp/>
      </Card.Body>
    </Card>
            </div>
    </Col>
  </React.Fragment>
  )
};

export default SignUpPage;
 // <React.Fragment>
  //   <Helmet title="Sign Up" />
  //   <div className="text-center mt-4">
  //     <h1 className="h2">Get started</h1>
  //     <p className="lead">
  //       Start creating the best possible user experience for you customers.
  //     </p>
  //   </div>

  //   <Card>
  //     <Card.Body>
  //       <div className="m-sm-4">
  //         <SignUp />
  //       </div>
  //     </Card.Body>
  //   </Card>
  // </React.Fragment>