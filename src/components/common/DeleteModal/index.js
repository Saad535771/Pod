import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect } from "react";
import { ShowAlert } from "../../../store/actions/alertActions";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

export default function FormDialog({
  deleteOpen,
  setDeleteOpen,
  item,
  workspaceId,
  deleteFunc,
  deletedName,
  restFucntion,
  candidateId,
  interviewSection,
  deleteName,
}) {
  // const dispatch = useDispatch();

  useEffect(() => {
    if (deletedName?.deletedItem?.success === true) {
      setDeleteOpen(false);
      restFucntion && restFucntion();
      // dispatch(ShowAlert("Deleted", "success"));
    } else if (deletedName?.deletedItem?.success === false) {
      setDeleteOpen(false);
      restFucntion && restFucntion();
      // dispatch(ShowAlert("Something Went Wrong", "error"));
    }
  }, [deletedName, deletedName?.deletedItem]);
  const handleClose = (_, reason) => {
    if (reason === "backdropClick") {
      return;
    }
    setDeleteOpen(false);
  };

  return (
    <>
      <Dialog
        open={deleteOpen}
        onClose={handleClose}
        className={styles.modelMail}
      >
        <DialogTitle>
          Please confirm, if to delete the {deleteName || "item"}
        </DialogTitle>

        <DialogActions className={styles.buttonSection}>
          <Box className={`button-primary ${styles.button1}`}>
            <Button className={"secondary-btn"} onClick={handleClose}>
              Close
            </Button>
          </Box>
          <Box className={` button-primary ${styles.button}`}>
            {interviewSection ? (
              <Button
                onClick={() =>
                  deleteFunc(item?.uuid, {
                    workspace_id: workspaceId,
                    candidate_id: candidateId,
                  })
                }
              >
                Confirm
              </Button>
            ) : (
              <Button onClick={() => deleteFunc(item, workspaceId || "")}>
                Confirm
              </Button>
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}
