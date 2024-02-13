import React from "react";
import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import CustomSelect from "../Select";
import TextInput from "../TextInput";

const SalarySelect = ({ label, options }) => {
  return (
    <Box className={styles.jobSalaryWrapper}>
      <label>{label}</label>
      <Box className={styles.jobSalary}>
        <CustomSelect
          options={options}
          customClass={`${styles.salarySelect} jobSalary`}
          placeholder=" "
          sx={{ margin: "0", marginRight: "5px" }}
        />
        <TextInput
          placeholder={""}
          type="text"
          name="jobsalary"
          required
          customClass={styles.createJobInp}
          sx={{ margin: "0" }}
        />
      </Box>
    </Box>
  );
};

export default SalarySelect;
