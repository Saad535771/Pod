import { Box } from "@mui/material";
import React from "react";
import Select, { components } from "react-select";
import AsyncSelect from "react-select/async";
import styles from "./styles.module.scss";
const CustomSelect = ({
  options,
  label,
  customClass,
  sx,
  placeholder,
  ...rest
}) => {
  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? "#306A82" : "",
        color: isFocused ? "white" : "black",
      };
    },
  };
  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className="custom-css-class">
          {options?.length === 0 ? "No data" : "Loading..."}
        </span>
      </components.NoOptionsMessage>
    );
  };
  return (
    <>
      <Box
        className={`${styles.select} selectCreate ${
          customClass ? customClass : ""
        }`}
        sx={sx}
      >
        <label>{label}</label>
        <Select
        className={styles.input}
          options={options}
          classNamePrefix="react-select"
          placeholder={placeholder || "Select"}
          styles={colourStyles}
          components={{ NoOptionsMessage }}
          {...rest}
        />
        {/* <AsyncSelect
          defaultOptions
          cacheOptions
          loadOptions={options}
          classNamePrefix="react-select"
          placeholder={placeholder || "Select"}
          styles={colourStyles}
          {...rest}
        /> */}
      </Box>
    </>
  );
};
// Certification & Licenses
export default CustomSelect;
