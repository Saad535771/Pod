import React, { useState } from "react";
import styles from "./styles.module.scss";
import open from "../../../../../assets/Icons/faqs_open.png";
import close from "../../../../../assets/Icons/faqs_close.png";
import { Box, Button, Typography } from "@mui/material";
const FaqsCard = ({ title, content, style }) => {
  const [show, setShow] = useState(false);
  return (
    <Box className={styles.faqCard} sx={style}>
      <Box className={styles.cardHeader}>
        <Button variant="outline" onClick={() => setShow(!show)} >
          {show ? (
            <img src={close} alt="close" />
          ) : (
            <img src={open} alt="open" />
          )}
        </Button>
        <Typography variant="h5">{title}</Typography>
      </Box>
      {show ? (
        <Box className={styles.cardBody}>
          <Typography align="left" variant="h6">{content}</Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default FaqsCard;
