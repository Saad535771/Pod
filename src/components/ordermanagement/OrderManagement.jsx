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
  import TextInput from "../common/TextInput";
  import CustomSelect from "../common/Select";
import BasicTable from "./BasicTable";
  const OrderManagement = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
      <>
        <Box className={style.parent}>
          <Box>
            <BasicTable />
          </Box>
          <Box>
          </Box>
        </Box>
      </>
    );
  };
  export default OrderManagement;