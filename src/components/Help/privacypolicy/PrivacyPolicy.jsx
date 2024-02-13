import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Box className={style.parent}>
        <Grid item xs={12}>
          <Typography variant="h4">Privacy & Policy</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5">We Respect Your Privacy</Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              fortehealthcare.com.au respects your right to privacy and this
              policy sets out how we collect and treat your personal
              information. “Personal information” is information we hold which
              is identifiable as being about you.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">
              What Personal Information We Collect We Respect Your Privacy
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              We may collect the following types of personal information from
              you:
            </Typography>
          </Box>
          <Box>
            <ul>
              <li>Name</li>
              <li>Address</li>
              <li>Phone number</li>
              <li>Fax number</li>
              <li>Information about the goods or services you have ordered</li>
              <li>Information from enquiries you have made</li>
              <li>Communications between us</li>
              <li>
                Detailed information about the running of your business as
                required for our services
              </li>
            </ul>
          </Box>
          <Box>
            <Typography variant="h5">
              How We Collect Your Personal Information
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              We collect personal information from you in a variety of ways,
              including: when you interact with us electronically or in person;
              when you access our website or social media presence(s); and when
              we provide our services to you.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">
              Use Of Your Personal Information
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              We use your information to provide our service(s) to you. We also
              use it to improve our service and to notify you of opportunities
              that we think you might be interested in. We do not provide your
              information to third parties, except that we may provide your
              information to our business partners who assist us in the
              provision of our services to you. We will not under any
              circumstances sell or rent your information to a third party.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">
              Security Of Your Personal Information
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              We take reasonable steps to protect your personal information.
              However we are not liable for any unauthorised access to this
              information.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">
              Access To Your Personal Information
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              You can access, update or request the removal of your personal
              information by contacting info@fortehealthcare.com.au
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">
              Google Analytics Advertising Features
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              We utilise Google Analytics Advertising features to identify
              trends of people visiting our website. This information is an
              aggregate overview and does not allow us to correlate your
              personal viewing habits on our or other websites. This process is
              done utilising the Google Analytics cookie and / or DoubleClick
              cookie. If you wish to opt-out of Google Analytics’ please visit
              their currently available opt-outs here.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">Policy Changes</Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              Any changes to this privacy policy will be updated on this site.
            </Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
