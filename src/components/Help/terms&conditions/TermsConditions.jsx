import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "./style.module.scss";

const TermsConditions = () => {
  return (
    <>
      <Box className={style.parent}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Terms & Conditions</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h5">
                Information Collection and Use
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                We collect several different types of information for various
                purposes to provide and improve our Service to you.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5">Types of Data Collected</Typography>
            </Box>
            <Box>
              <Typography variant="h5">Personal Data</Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                While using our Service, we may ask you to provide us with
                certain personally identifiable information that can be used to
                contact or identify you (“Personal Data”). Personally
                identifiable information may include, but is not limited to:
              </Typography>
            </Box>
            <Box>
              <ul>
                <li>Email Address</li>
                <li>First Name & Last Name</li>
                <li>Cookies & Usage Data</li>
              </ul>
            </Box>
            <Box>
              <Typography variant="h6">
                We may use your Personal Data to contact you with newsletters,
                marketing or promotional materials and other information that
                may be of interest to you. You may opt out of receiving any, or
                all, of these communications from us by following the
                unsubscribe link or the instructions provided in any email we
                send.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5">Usage Data</Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                We may also collect information on how the Service is accessed
                and used (“Usage Data”). This Usage Data may include information
                such as your computer’s Internet Protocol address (e.g. IP
                address), browser type, browser version, the pages of our
                Service that you visit, the time and date of your visit, the
                time spent on those pages, unique device identifiers and other
                diagnostic data.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5">Tracking & Cookies Data</Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                We use cookies and similar tracking technologies to track the
                activity on our Service and we hold certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier. Cookies are sent to your browser
                from a website and stored on your device. Other tracking
                technologies are also used such as beacons, tags and scripts to
                collect and track information and to improve and analyse our
                Service. <br />
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                Service.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TermsConditions;
