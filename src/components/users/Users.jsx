import {
  Container,
  Divider,
  Grid,
  InputAdornment,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BiSearch } from "react-icons/bi";
import style from "./style.module.scss";
import userAdd from "../../assets/dashboard_images/user-add.svg" 
const CreateUser = () => {
  return (
    <Box className={style.parent}>
      <Box>
        <Typography variant="h4">Users</Typography>
      </Box>
        <Grid container className={style.user_main_box}>
          <Grid item sm={12} >
            <InputBase
              className={style.iconfield}
              placeholder="Search"
              startAdornment={
                <InputAdornment position="start">
                  <BiSearch />
                </InputAdornment>
              }
              label="Password"
            />
          </Grid>
        
          <Box className={style.card_box}>
          <Grid container spacing={4} >
            <Grid item md={6} lg={4} xl={3}>
              <Box className={style.card_main_box}>
                <Box className={style.card_img_box}>
                  <Box className={style.card_img}>
                    <img src={userAdd} alt="" />
                  </Box>
                </Box>
                <Box>
                <Divider sx={{ bgcolor: "#0d99ff" }} />
                  <Typography variant="h4">Charlotte Olivia</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">2022-10-25T027:10:35.000000Z</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">CharlotteOlivia@gmail.com</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} lg={4} xl={3}>
              <Box className={style.card_main_box}>
                <Box className={style.card_img_box}>
                  <Box className={style.card_img}>
                    <img src={userAdd} alt="" />
                  </Box>
                </Box>
                <Box>
                <Divider sx={{ bgcolor: "#0d99ff" }} />
                  <Typography variant="h4">Charlotte Olivia</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">2022-10-25T027:10:35.000000Z</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">CharlotteOlivia@gmail.com</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} lg={4} xl={3}>
              <Box className={style.card_main_box}>
                <Box className={style.card_img_box}>
                  <Box className={style.card_img}>
                    <img src={userAdd} alt="" />
                  </Box>
                </Box>
                <Box>
                <Divider sx={{ bgcolor: "#0d99ff" }} />
                  <Typography variant="h4">Charlotte Olivia</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">2022-10-25T027:10:35.000000Z</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">CharlotteOlivia@gmail.com</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} lg={4} xl={3}>
              <Box className={style.card_main_box}>
                <Box className={style.card_img_box}>
                  <Box className={style.card_img}>
                    <img src={userAdd} alt="" />
                  </Box>
                </Box>
                <Box>
                <Divider sx={{ bgcolor: "#0d99ff" }} />
                  <Typography variant="h4">Charlotte Olivia</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">2022-10-25T027:10:35.000000Z</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">CharlotteOlivia@gmail.com</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          </Box>
          
        </Grid>

    </Box>
  );
};

export default CreateUser;
