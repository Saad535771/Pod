import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import style from "./style.module.scss";
const AuditPerform = () => {
  return (
    <Box className={style.parent}>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h4'>
                Complete Audit
                </Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
                <Box className={style.main_box}>
                    <Box>
                        <Typography variant='h5'>
                        Site: Website Flow
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6'>
                        Score Threshold: 25
                        </Typography>
                        <Typography variant='h6'>
                        Status: Active
                        </Typography>
                    </Box>
                </Box>
                <Box className={style.main_box}>
                    <Box>
                        <Typography variant='h5'>
                        Site: Website Flow
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6'>
                        Score Threshold: 25
                        </Typography>
                        <Typography variant='h6'>
                        Status: Active
                        </Typography>
                    </Box>
                </Box>
                <Box className={style.main_box}>
                    <Box>
                        <Typography variant='h5'>
                        Site: Website Flow
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6'>
                        Score Threshold: 25
                        </Typography>
                        <Typography variant='h6'>
                        Status: Active
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
export default AuditPerform