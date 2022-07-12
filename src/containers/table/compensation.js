import React from "react";

import { Grid , Box } from "@mui/material";

import styles from './compTable.module.scss';

const Compensation = ({ allowance ,employerCompensation,insuranceCompensation , empDays,insDays}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={4} columns={8} className={styles['main-table']}>
      <Grid item xs={4}>
        <div>The employer compensates <span className={styles['span-days']}>{empDays}  days</span></div>
      </Grid>
      <Grid item xs={4}>
        <div>Health Insurance compensates <span className={styles['span-days']}>{insDays} days</span></div>
      </Grid>
      <Grid item xs={4}>
        <div>
            <h2 className={styles['money']}>{employerCompensation}</h2>
            <p className={styles['allowance']}>Daily allowance <span>{allowance}</span></p>
        </div>
      </Grid>
      <Grid item xs={4}>
      <div>
            <h2 className={styles['money']}>{insuranceCompensation}</h2>
            <p className={styles['allowance']}>Daily allowance <span>{allowance}</span></p>
        </div>
      </Grid>
    </Grid>

    </Box>
  );
};

export default Compensation;
