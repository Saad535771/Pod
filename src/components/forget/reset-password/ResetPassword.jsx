import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import forthealthlogo from "../../../assets/images/fortehealthlogo.png";
import TextInput from "../../common/TextInput";
import LoginImage from "../../../assets/images/login_images/login.png";
const ResetPassword = () => {
  return (
    <>
      {/* <ModelOpen open={open} setOpen={setOpen}>
        <ModelChildren open={open} setOpen={setOpen} />
      </ModelOpen> */}

      <Box className={styles.parent}>
      <Grid container className={styles.parent_main}>
        <Grid item sm={6}>
        <Box className={styles.leftBox}>
        <Box className={styles.content}>
          <Box>
          <Typography variant="h6">Reset Password</Typography>
          </Box>
                <Box className={styles.parentInput}>
                  <TextInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {/* <span>{errors.email && touched.email && errors.email}</span> */}
                </Box>
                <Box className={styles.parentInput}>
                  <TextInput
                    label="Confirm password"
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                  />
                  {/* <span>{errors.email && touched.email && errors.email}</span> */}
                </Box>
                <Box className={styles.Button}>
                  <Button
                    sx={{ marginBottom: "10px" }}
                  >
                    Resend
                    {/* {auth?.isLoading ? (
                      <CircularProgress style={{ color: "white" }} />
                    ) : (
                      "Sign In"
                    )} */}
                  </Button>
                </Box>
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

export default ResetPassword;
