import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import FaqsCard from "./single-faqs-card";


const Faq = () => {
    const navigate = useNavigate();
  const faqsData = [
    {
      title: "How can i register to receive daily dates?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable ",
    },
    {
      title: "Is there any membership plan offered?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable ",
    },
    {
      title: "Can i access Forte Health Care on social Media?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable ",
    },
    {
      title: "Is the provided information authentic?",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable ",
    },
    {
      title: "How can i find forte Health Care",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable ",
    },
   
    
    
  ];
  return (
    <>
      <Box className={style.parent}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">
              FAQ's
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={style.faq_main_head}>
            <Box>
            <Box className={style.cardContainer}>
          <Grid container>
            {faqsData.map((data, i) => {
              return (
                <Grid item xs={12} className={style.faqcard}>
                  <FaqsCard
                    title={data.title}
                    content={data.content}
                    key={data.title}
                    // style={{
                    //   marginLeft: i % 2 === 0 ? "auto " : "",
                    //   "@media (max-width:900px)": {
                    //     marginLeft: "unset",
                    //     maxWidth: "100%",
                    //   },
                    // }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default Faq;
