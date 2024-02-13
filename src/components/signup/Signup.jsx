import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../common/TextInput";
import { routes } from "../../routes";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import LoginImage from "../../assets/images/fortehealthlogo.png";
const Signup = () => {
  const onSubmit = (values) => {
    // console.log( values);
  };
  const initialValues = {
    // name:"",
    email: "",
    password: "",
  };
  const SignupSchema = Yup.object().shape({
    // name: Yup.string().name("Please Enter Your Name").required("Required"),
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
              <Typography variant="h1">Welcome Podmatched!</Typography>
              <Box className={styles.content}>
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
                          label="Full Name"
                          type="text"
                          name="name"
                          placeholder="Enter Email Address"
                          onChange={handleChange}
                          value={values.email}
                        />
                      </Box>
                      <Box className={styles.parentInput}>
                        <TextInput
                          label="Email"
                          type="email"
                          name="email"
                          placeholder="Enter verified email here."
                          onChange={handleChange}
                          value={values.email}
                        />
                        <span className={styles.error}>
                          {errors.email && touched.email && errors.email}
                        </span>
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
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </span>
                      </Box>
                      <Box className={styles.forget}>
                        <Link to={routes.LOGIN}>Already have an Account</Link>
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
                      <Box className={styles.bottom}>
                  <Typography align="left" variant="h5">Don’t have an account?</Typography>
                  <Link to={routes.SIGNUP}>Sign Up Now</Link>
                </Box>
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
export default Signup;
