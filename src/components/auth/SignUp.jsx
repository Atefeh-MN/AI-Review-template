import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Button, Form } from "react-bootstrap";
import {Google,Facebook,Instagram}from 'iconsax-react'
import useAuth from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
const { t } = useTranslation();
  return (
    <Formik
      initialValues={{
        phoneNumber: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        phoneNumber: Yup.number().max(10).required(t('phoneNumberE')),
        userName: Yup.string().max(255).required(t('userNameE')),
         email: Yup.string()
          .email(t('emailValid'))
          .max(255)
          .required(t('emailRequied')),
        password: Yup.string().min( 4, t( 'minpassE' ) ).max( 255 ).required( t( 'passwordError' ) ),
        confirmPassword: Yup.string() .oneOf([Yup.ref('password'), null], t('confirmPE')).min(4,t('minpassE')).max(255).required(t('passwordError')),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          signUp(
            values.email,
            values.password,
            values.confirmPassword,
            values.phoneNumber,
            values.userName
          );
          navigate("/auth/sign-in");
        } catch (error) {
          const message = error.message || "Something went wrong";

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <Form onSubmit={handleSubmit}>
          {errors.submit && (
            <Alert className="my-3" variant="danger">
              {errors.submit}
            </Alert>
          )}
          
          <Form.Group className="mb-3">
            <Form.Label>{t('email')}</Form.Label>
            <Form.Control
              type="email"
              name="email"
               size="lg"
              placeholder={t('emailP')}
              value={values.email}
              isInvalid={Boolean(touched.email && errors.email)}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {!!touched.email && (
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <div className="d-flex justify-content-between align-items-center">
          <Form.Group className="mb-3">
              <Form.Label>{t( "phoneNumber" )}</Form.Label>
            <Form.Control
                type='tel'
                 size="lg"
              name="phoneNumber"
              placeholder={t( "phoneNumberP" )}
              value={values.phoneNumber}
              isInvalid={Boolean(touched.phoneNumber && errors.phoneNumber)}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {!!touched.phoneNumber && (
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>{t( "userName" )}</Form.Label>
            <Form.Control
                type="text"
                 size="lg"
              name="userName"
              placeholder={t( "userNameP" )}
              value={values.userName}
              isInvalid={Boolean(touched.userName && errors.userName)}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {!!touched.userName && (
              <Form.Control.Feedback type="invalid">
                {errors.userName}
              </Form.Control.Feedback>
            )}
            </Form.Group>
            </div>
           <div className="d-flex justify-content-between align-items-center">
          <Form.Group className="mb-3">
            <Form.Label>{t( "passwordup" )}</Form.Label>
            <Form.Control
              type="password"
              name="password"
               size="lg"
              placeholder={t( "passwordP" )}
              value={values.password}
              isInvalid={Boolean(touched.password && errors.password)}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {!!touched.password && (
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{t( "confirm" )}</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
               size="lg"
              placeholder={t( "confirmP" )}
              value={values.confirmPassword}
              isInvalid={Boolean(touched.confirmPassword && errors.confirmPassword)}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {!!touched.confirmPassword && (
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            )}
            </Form.Group>
            </div>
          <div className="text-center mt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="d-flex w-100 justify-content-center"
               style={{backgroundColor:'#4D47C3',fontSize:'1.1rem'}} 
            >
             {t("signUp")}
            </Button>
          </div>
          <div className="d-flex  justify-content-center align-items-center text-center mt-4">
            <p>{t( "or" )}</p>
            </div>
          <div className="text-center mt-1">
            <Link>
              <Google size="32" color="#4D47C3" variant="Bulk" />
            </Link>
              <Link>
           <Facebook size="32" color="#4D47C3" variant="Bulk"/>
            </Link>
            <Link>
           <Instagram size="32" color="#4D47C3" variant="Bulk"/>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignUp;
