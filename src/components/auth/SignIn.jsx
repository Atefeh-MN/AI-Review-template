import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Button, Form } from "react-bootstrap";
import {Google,Facebook,Instagram}from 'iconsax-react'
import useAuth from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
const { t } = useTranslation();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(t('emailValid'))
          .max(255)
          .required(t('emailRequied')),
        password: Yup.string().max(255).required(t('passwordError')),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await signIn(values.email, values.password);

          navigate("/");
        } catch (error) {
          const message = error.message || t('error');

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
              <div className="alert-message">{errors.submit}</div>
            </Alert>
          )}

          <Form.Group className="mb-4">
                <Form.Label>{t( 'email' )}</Form.Label>
                      <Form.Control
                          size="lg"
                          type="email"
                          name="email"
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

          <Form.Group className="mb-4">
                      <Form.Label>{t( 'password' )}</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              name="password"
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
            <small>
                          <Link to="/auth/reset-password">{t( "forgotPassword" )}</Link>
            </small>
          </Form.Group>
           <div className="text-center mt-3">
            <Button
              type="submit"
              variant="outline-light"
              size="lg"
              style={{backgroundColor:'#4D47C3',fontSize:'1.1rem'}}
              disabled={isSubmitting}
              className="d-flex w-100 justify-content-center"
            >
              {t("logIn")}
            </Button>
          </div>
          <div className="d-flex  justify-content-center align-items-center text-center mt-5">
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

export default SignIn;
