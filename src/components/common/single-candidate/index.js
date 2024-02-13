import {
  Box,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomSelect from "../Select";
import styles from "./styles.module.scss";
import { ReactComponent as Notification } from "../../../assets/dashboard/bell.svg";
import { ReactComponent as Eye } from "../../../assets/candidates/eye.svg";
import { ReactComponent as Verification } from "../../../assets/new-icons/verification.svg";
import { ReactComponent as Resend } from "../../../assets/new-icons/resend.svg";
import { ReactComponent as Send } from "../../../assets/new-icons/send.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getCandidateFormDetail,
  getCandidateFormDetail2,
  getCandidateFormDetail3,
  getCandidateFormDetail4,
  getCandidateFormSelect,
  reqCandidateFormDetail,
  reqCandidateFormDetail2,
  reqCandidateFormDetail3,
  reqCandidateFormDetail4,
  resendFormCandidate,
  resendFormCandidate2,
  resendFormCandidate3,
  resendFormCandidate4,
  resetSelecCandidate,
  viewForm,
} from "../../../store/actions/applyJobActions";
import { ShowAlert } from "../../../store/actions/alertActions";
import CustomModel from "../../candidates/single-candidate-model";
import ResendModel from "../../candidates/resend-form";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

const SelectSection = ({ title, des, des2, results, cata, uuid, id }) => {
  const [open, setOpen] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const applyJobs = useSelector((state) => state?.applyJob);
  const candidate = useSelector((state) => state?.rcandidate);
  const candidateID = JSON.parse(localStorage.getItem("candidateID"));
  const auth = useSelector((state) => state?.auth);
  const options = applyJobs?.selectForms?.results?.map((e) => {
    return { label: e?.name, value: e?.id };
  });

  const [values, setValues] = useState({
    form_builder_id: "",
  });
  const [Customerror, setErrors] = useState({});
  const validate = (data) => {
    const newError = {};
    for (let key in data) {
      let value = data[key];
      switch (key) {
        case "form_builder_id":
          if (value.length === 0 || value.toString() === "")
            newError[key] = "fields is Required";
          break;
        default:
      }
    }
    return newError;
  };
  const viewData = () => {
    if (results?.results?.response === "completed") {
      dispatch(viewForm(results?.results?.submit_data?.uuid)).then(() => {
        navigate(`${routes.FORM_VIEW}/${results?.results?.submit_data?.uuid}`, {
          state: {
            type: "submission",
            uuid: results?.results?.submit_data?.uuid,
            data: results?.results?.form_builder?.form_builder_json,
          },
        });
      });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    const validateSelect = validate(values);
    if (Object?.keys(validateSelect)?.length > 0) {
      console.log();
      setErrors(validateSelect);
      dispatch(ShowAlert("Please Select one option", "error"));
      return;
    }

    const localData = {
      form_builder_id: values?.form_builder_id?.value,
      uuid: uuid,
      recruiter_id: auth?.results?.recruiter_id,
      candidate_id: candidate?.showCandidate?.results?.id || candidateID,
      workspace_id: auth?.results?.workspace_id,
      form_category_name: cata,
    };
    if (id === 1) {
      dispatch(reqCandidateFormDetail(localData)).then((e) =>
        dispatch(
          getCandidateFormDetail({
            uuid: uuid,
            recruiter_id: auth?.results?.recruiter_id,
            candidate_id: candidate?.showCandidate?.results?.id || candidateID,
            workspace_id: auth?.results?.workspace_id,
            form_category_name: "Job Offer Letter",
          })
        )
      );
    } else if (id === 2) {
      dispatch(reqCandidateFormDetail2(localData)).then((e) =>
        dispatch(
          getCandidateFormDetail2({
            uuid: uuid,
            recruiter_id: auth?.results?.recruiter_id,
            candidate_id: candidate?.showCandidate?.results?.id || candidateID,
            workspace_id: auth?.results?.workspace_id,
            form_category_name: "Application Form",
          })
        )
      );
    } else if (id === 3) {
      dispatch(reqCandidateFormDetail3(localData)).then((e) =>
        dispatch(
          getCandidateFormDetail3({
            uuid: uuid,
            recruiter_id: auth?.results?.recruiter_id,
            candidate_id: candidate?.showCandidate?.results?.id || candidateID,
            workspace_id: auth?.results?.workspace_id,
            form_category_name: "Induction Forms",
          })
        )
      );
    } else if (id === 4) {
      dispatch(reqCandidateFormDetail4(localData)).then((e) =>
        dispatch(
          getCandidateFormDetail4({
            uuid: uuid,
            recruiter_id: auth?.results?.recruiter_id,
            candidate_id: candidate?.showCandidate?.results?.id || candidateID,
            workspace_id: auth?.results?.workspace_id,
            form_category_name: "Miscellaneous Forms",
          })
        )
      );
    } else {
    }
  };
  const resendData = async (e) => {
    e.preventDefault();
    // const validateSelect = validate(values);
    // if (Object?.keys(validateSelect)?.length > 0) {
    //   console.log();
    //   setErrors(validateSelect);
    //   dispatch(ShowAlert("Please Select one option", "error"));
    //   return;
    // }

    const localData = {
      form_builder_id: values?.form_builder_id?.value,
      uuid: uuid,
      recruiter_id: auth?.results?.recruiter_id,
      candidate_id: candidate?.showCandidate?.results?.id || candidateID,
      workspace_id: auth?.results?.workspace_id,
      form_category_name:
        id === 1
          ? applyJobs?.candidateForm1.results?.form_builder_id
          : id === 2
          ? applyJobs?.candidateForm2.results?.form_builder_id
          : id === 3
          ? applyJobs?.candidateForm3.results?.form_builder_id
          : id === 4
          ? applyJobs?.candidateForm4.results?.form_builder_id
          : "",
    };
    if (id === 1) {
      dispatch(resendFormCandidate(localData)).then((e) =>
        dispatch(
          getCandidateFormDetail({
            uuid: uuid,
            recruiter_id: auth?.results?.recruiter_id,
            candidate_id: candidate?.showCandidate?.results?.id || candidateID,
            workspace_id: auth?.results?.workspace_id,
            form_category_name: "Job Offer Letter",
          })
        )
      );
    } else if (id === 2) {
      dispatch(resendFormCandidate2(localData)).then((e) =>
        dispatch(
          getCandidateFormDetail2({
            uuid: uuid,
            recruiter_id: auth?.results?.recruiter_id,
            candidate_id: candidate?.showCandidate?.results?.id || candidateID,
            workspace_id: auth?.results?.workspace_id,
            form_category_name: "Application Form",
          })
        )
      );
    } else if (id === 3) {
      dispatch(resendFormCandidate3(localData)).then((e) =>
        dispatch(
          getCandidateFormDetail3({
            uuid: uuid,
            recruiter_id: auth?.results?.recruiter_id,
            candidate_id: candidate?.showCandidate?.results?.id || candidateID,
            workspace_id: auth?.results?.workspace_id,
            form_category_name: "Induction Forms",
          })
        )
      );
    } else if (id === 4) {
      dispatch(resendFormCandidate4(localData)).then((e) =>
        dispatch(
          getCandidateFormDetail4({
            uuid: uuid,
            recruiter_id: auth?.results?.recruiter_id,
            candidate_id: candidate?.showCandidate?.results?.id || candidateID,
            workspace_id: auth?.results?.workspace_id,
            form_category_name: "Miscellaneous Forms",
          })
        )
      );
    } else {
    }
  };

  return (
    <Box className={styles.headers}>
      <CustomModel open={open} setOpen={setOpen}>
        <ResendModel
          open={open}
          setOpen={setOpen}
          uuid={uuid}
          id={id}
          cata={cata}
          results={results}
        />
      </CustomModel>
      <Typography variant="h5">{title || "Job Offer Letter"}</Typography>
      {results === null && applyJobs?.isLoading === true ? (
        <div className={styles.boxLoading}>
          <div className={"loader"}>
            <CircularProgress />
          </div>
        </div>
      ) : (
        <>
          {des && <Typography>{results?.results ? des2 : des}</Typography>}
          <Box className={styles.conents}>
            {results?.results ? (
              <p style={{ margin: "0px" }}> {title} Sent</p>
            ) : (
              <CustomSelect
                options={options}
                name="form_builder_id"
                customClass={styles.select}
                value={values?.form_builder_id}
                onChange={(e) => {
                  setValues({ ...values, form_builder_id: e });
                }}
                onFocus={() => {
                  dispatch(
                    getCandidateFormSelect({
                      workspace_id: auth?.results?.workspace_id,
                      form_category_name: cata,
                    })
                  );
                }}
                onFocusOut={() => {
                  dispatch(resetSelecCandidate());
                }}

                //   label="Select Industries"
              />
            )}
            <div className={styles.spacebox}>
              {results?.results &&
                (results?.results?.response === "pending" ? (
                  <Box className={`${styles.para} text-warning`}>
                    {results?.results?.response}
                  </Box>
                ) : (
                  <Box className={`${styles.para} text-green`}>
                    {results?.results?.response}
                  </Box>
                ))}
            </div>
            <Box className={styles.boxContainer}>
              {results?.results?.response === "pending" ? (
                <Box>
                  <Tooltip title="Resend">
                    <Resend onClick={(e) => setOpen(true)} />
                  </Tooltip>
                </Box>
              ) : results?.results?.response === "completed" ? (
                <Box>
                  <Tooltip title="View">
                    <Eye onClick={viewData} />
                  </Tooltip>
                </Box>
              ) : (
                <Box>
                  <Tooltip title="Send">
                    <Send onClick={(e) => submitData(e)} />
                  </Tooltip>
                </Box>
              )}{" "}
              {results?.results?.response === "pending" && (
                <Box>
                  <Tooltip title="Reminder">
                    <Notification onClick={(e) => resendData(e)} />
                  </Tooltip>
                </Box>
              )}
            </Box>

            {/* <Button
                onClick={(e) =>
                  results?.results ? setOpen(true) : submitData(e)
                }
              >
                {results?.results ? "Resend" : "Send"}{" "}
              </Button> */}
          </Box>
        </>
      )}
    </Box>
  );
};

export default SelectSection;
