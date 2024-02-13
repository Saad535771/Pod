import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import styles from "./styles.module.scss";

import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../common/TextInput";
import { routes } from "../../../routes";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import forthealthlogo from "../../../assets/images/fortehealthlogo.png";
import LoginImage from "../../../assets/images/login_images/login.png";
const Login = () => {
  const onSubmit = (values) => {
    // console.log( values);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, `Password is too short - should be 8 chars minimum`),
  });
  return (
    
    <>
      {/* <ModelOpen open={open} setOpen={setOpen}>
        <ModelChildren open={open} setOpen={setOpen} />
      </ModelOpen> */}

      <Box className={styles.parent}>
      <Grid container className={styles.parent_main}>
        <Grid item sm={6}>
        <Box className={styles.leftBox}>
        <Typography variant="h1">Welcome to!</Typography>
        <Box className={styles.content}>
          <Typography variant="h3">Huixiouior Smart Cloud <br />
              WareHouse Shipping System</Typography>
          <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit} className={styles.formsBox}>
                <Box className={styles.parentInput}>
                  <TextInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter verified email here."
                    onChange={handleChange}
                    value={values.email}
                  />
                  <span className={styles.error}>{errors.email && touched.email && errors.email}</span>
                </Box>
                <Box className={styles.parentInput}>
                  <TextInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter verified password here. "
                    onChange={handleChange}
                    value={values.password}
                  />
                  <span className={styles.error}>
                    {errors.password && touched.password && errors.password}
                  </span>
                </Box>
                <Box className={styles.forget}>
                  <Link to={routes.FORGET_PASSWORD}>Forgot Password?</Link>
                </Box>
                <Box className={styles.forget}>
                  <Link to={routes.SIGNUP}>Create Account</Link>
                </Box>
                <Box className={styles.Button}>
                  <Button
                    sx={{ marginBottom: "10px" }}
                    onClick={handleSubmit}
                  >
                    Sign in
                    {/* {auth?.isLoading ? (
                      <CircularProgress style={{ color: "white" }} />
                    ) : (
                      "Sign In"
                    )} */}
                  </Button>
                </Box>
                {/* <Box className={styles.bottom}>
                  <Typography align="left" variant="h5">Don’t have an account?</Typography>
                  <Link to={routes.SIGNUP}>Sign Up Now</Link>
                </Box> */}
                </Form>
          )}
        </Formik>
        </Box>
      </Box>
        </Grid>
        <Grid item sm={6}>
        <Box className={styles.img_box}>
              <img src={LoginImage} />
            </Box>
        </Grid>
      </Grid>
      </Box>
    </>
  );
};
export default Login;
