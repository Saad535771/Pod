import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import style from "./style.module.scss";
import forthealthlogo from "../../assets/images/fortehealthlogo.png";
import header_user from "../../assets/Icons/header_user.png";
import header_notification from "../../assets/Icons/header_notification.png";
import { Container } from "@mui/system";
import { AiOutlineMore } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextInput from "../common/TextInput";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header = () => {
  //   const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box className={style.parent}>
        <Grid container className={style.main_Box}>
          <Grid item xs={6} sm={9} spacing={2}>
            <Box className={style.left_box}>
            <Box>
                <Typography variant="h5">DASHBOARD</Typography>
              </Box>
              <Grid item md={3}>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} className={style.rightbox}>
            <Box display="flex">
              {/* <Box className={style.img_box}>
                                <img src={header_notification} alt="" />
                            </Box> */}
             
              {/* <Box className={style.img_box}>
                            <img src={header_user} alt="" />
                            </Box> */}
              <Box>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <AiOutlineMore />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      width: "15ch",
                    },
                  }}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Header;
