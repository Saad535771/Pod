import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import styles from "./styles.module.scss";

import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import forthealthlogo from "../../assets/images/fortehealthlogo.png";
import TextInput from "../common/TextInput";
import LoginImage from "../../assets/images/login_images/login.png";

const Forget = () => {


  return (
    <>
      {/* <ModelOpen open={open} setOpen={setOpen}>
        <ModelChildren open={open} setOpen={setOpen} />
      </ModelOpen> */}

      <Box className={styles.parent}>
      <Grid container className={styles.parent_main}>
        <Grid item sm={6}>
        <Box className={styles.leftBox}>
        {/* <img src={forthealthlogo} alt="logo" /> */}
        <Box className={styles.content}>
          <Box>
          <Typography variant="h2">Forgot Password?</Typography>
          <Typography variant="h6">simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum</Typography>
          </Box>
          {/* <Box>
          <Typography variant="h6">simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
          </Box> */}
                <Box className={styles.parentInput}>
                  <TextInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
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
        <img src={LoginImage} />
            </Box>
        </Grid>
      </Grid>
      </Box>
    </>
  );
};

export default Forget;
