import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import forthealthlogo from "../../../assets/images/fortehealthlogo.png";
import TextInput from "../../common/TextInput";
const Verification = () => {
  return (
    <>
      {/* <ModelOpen open={open} setOpen={setOpen}>
        <ModelChildren open={open} setOpen={setOpen} />
      </ModelOpen> */}
      <Box className={styles.parent}>
      <Grid container className={styles.parent_main}>
        <Grid item sm={6}>
        <Box className={styles.leftBox}>
        <img src={forthealthlogo} alt="logo" />
        <Box className={styles.content}>
          <Box>
          <Typography variant="h6">Enter Code for Verfication</Typography>
          </Box>
                <Box className={styles.parentInput}>
                  <TextInput
                    label=" "
                    type="email"
                    name="otp"
                    placeholder="OTP"
                    // onChange={handleChange}
                    // value={values.email}
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
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=800" />
            </Box>
        </Grid>
      </Grid>
      </Box>
    </>
  );
};
export default Verification;
