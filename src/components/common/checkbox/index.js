import { Box } from "@mui/material";
import React from "react";
import check from "../../../assets/common/checkbox/check.svg";
import unChecked from "../../../assets/common/checkbox/unCheck.svg";
import styles from "./styles.module.scss";

const Checkbox = ({ click, setClick, text, click2, setClick2 }) => {
  return (
    <Box className={styles.checkBox}>
      <img
        src={click ? check : unChecked}
        alt="checkbox"
        onClick={() => {
          setClick(true);
          setClick2(false);
        }}
      />
      <span
        onClick={() => {
          setClick(true);
          setClick2(false);
        }}
      >
        {text}
      </span>
    </Box>
  );
};

export default Checkbox;
