import { Box } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const TextInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChnage,
  customClass,
  textarea,
  compolsory,
  ...props
}) => {
  const [isClick, setIsClick] = useState(false);
  const REGEX = /^[+][(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]$/g;
  return (
    <Box
      className={`${styles.formInput} ${customClass ? customClass : " "} `}
      {...props}
    >
      <label>
        {label}{" "}
        {compolsory && (
          <span
            style={{
              color: "red",
              textDecoration: "none",
              position: "relative",
              display: "initial",
            }}
          >
            *
          </span>
        )}
      </label>
      {textarea ? (
        <textarea
          type={isClick ? "text" : type}
          name={name}
          min={type === "number " ? "0" : ""}
          placeholder={placeholder}
          value={value}
          {...props}
        ></textarea>
      ) : (
        <input
          type={isClick ? "text" : type}
          name={name}
          placeholder={placeholder}
          value={value}
          {...props}
          // onChnage={onChnage}
        />
      )}
      {type === "password" && (
        <Box className={styles.showPass} onClick={() => setIsClick(!isClick)}>
          {isClick ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
