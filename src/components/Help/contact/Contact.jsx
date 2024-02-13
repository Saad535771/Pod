import { Button, Grid, InputBase, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import TextInput from '../../common/TextInput';
import style from "./style.module.scss";

const Contact = () => {
  return (
    <>
    <Box className={style.parent}>
    <Grid container>
      <Grid item sx={12}>
        <Typography variant='h4'>
        Contact Us
        </Typography>
      </Grid>
    </Grid>
    <Box className={style.input_parent}>
    <Grid container>
      <Grid item sx={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextInput
            type='text'
            placeholder='First Name'
            label="First Name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
            type='text'
            placeholder='Last Name'
            label="Last Name"
            />
          </Grid>
        </Grid>
        <Grid container className={style.email_box}>
          <Grid item xs={12}>
            <TextInput 
            type='email'
            placeholder='Email Address'
            label="Email Address"
            />
          </Grid>
        </Grid>
        <Grid container className={style.email_box}>
          <Grid item xs={12}>
            <TextInput 
            type='text'
            placeholder='Phone Number'
            label="Phone Number"
            />
          </Grid>
        </Grid>
        <Grid container className={style.msg_box}>
          <Grid item xs={12}>
            <TextInput 
            type='text'
            placeholder='Leave us a message....'
            label="Message"
            />
          </Grid>
        </Grid>
        <Box className={style.btn_box}>
          <Button variant="contained">Send Message</Button>
        </Box>
      </Grid>
    </Grid>
    </Box>
    </Box>
    </>
  )
}

export default Contact
