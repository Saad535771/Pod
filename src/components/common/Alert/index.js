import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveAlert } from "../../../store/actions/alertActions";

const Alerts = () => {
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alert);

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "80px",
          right: "40px",
          zIndex: "999999999",
        }}
      >
        {alerts !== null &&
          alerts?.length > 0 &&
          alerts?.map((alert) => (
            <Alert
              sx={{ marginBottom: "10px" }}
              // variant="outlined"
              variant="filled"
              severity={alert.alertType}
              key={alert.id}
              onClick={() => dispatch(RemoveAlert(alert?.id))}
            >
              {alert.msg}
            </Alert>
          ))}
      </Box>
    </>
  );
};

export default Alerts;
