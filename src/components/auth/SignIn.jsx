import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Button, Form } from "react-bootstrap";

import useAuth from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
const { t } = useTranslation();
  return (
    <Formik
      initialValues={{
        email: "demo@bootlab.io",
        password: "unsafepassword",
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

          <Form.Group className="mb-3">
                <Form.Label>{t( 'email' )}</Form.Label>
                      <Form.Control
                          size="lg"
                          type="email"
                          name="email"
                          placeholder={t('email')}
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

          <Form.Group className="mb-3">
                      <Form.Label>{t( 'password' )}</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              name="password"
              placeholder={t( "password" )}
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
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              {t("signIn")}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignIn;
