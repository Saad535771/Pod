import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ImageUploader = ({
  label,
  onChange,
  valuenew,
  name,
  value,
  setEdit,
  edit,
  disabled,
}) => {
  const [image, showImage] = useState(false);
  const auth = useSelector((state) => state?.auth);

  useEffect(() => {
    if (edit) {
      showImage(true);
    }
  }, [edit]);
  useEffect(() => {
    if (!edit && valuenew) {
      showImage(URL?.createObjectURL(valuenew));
    }
  }, [valuenew]);

  return (
    <Box className={styles.imageUploaderWrapper}>
      <label>{label}</label>
      <Box className={styles.imageUploader}>
        <>
          {image ? (
            <img
              src={edit ? `${process.env.REACT_APP_URL}${valuenew}` : image}
              onClick={() => {
                if (auth?.results?.workspace_type !== "recruitment") {
                  return;
                }
                showImage(false);
              }}
              style={{
                maxWidth: "100%",
                maxHeight: "120px",
                objectFit: "contain",
              }}
            />
          ) : (
            <>
              {" "}
              <label htmlFor="file-input">
                <Box className={styles.imageBox}>
                  <Typography>Click to upload an image</Typography>
                </Box>
                <input
                  accept="image/*"
                  id="file-input"
                  disabled={disabled}
                  type="file"
                  value={value}
                  onChange={onChange}
                  name={name}
                />
              </label>
              <Typography>PNG or JPG file of 1500 x 500 pixels.</Typography>
            </>
          )}
        </>
      </Box>
    </Box>
  );
};

export default ImageUploader;
