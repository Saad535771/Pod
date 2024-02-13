import {
    Box,
    Button,
    Checkbox,
    Grid,
    InputBase,
    MenuItem,
    TextField,
    Typography,
  } from "@mui/material";
  import { Container } from "@mui/system";
  import React from "react";
  import style from "./style.module.scss";
  const ProductList = () => {
    return (
      <>
        <Box className={style.parent}>
          <Box>
            <Typography variant="h5"><center>Podmatch List</center></Typography>
          
          </Box>
          <Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default ProductList;
  