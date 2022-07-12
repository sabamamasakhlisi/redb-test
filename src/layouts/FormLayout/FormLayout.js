import React, { useState } from "react";
import { Typography } from "@mui/material";

import FormContainer from "../../containers/form/FormContainer";
import { calculateCompansation } from "../../helpers/helper";
import styles from "./action.module.scss";
import Compensation from "../../containers/table/compensation";

const initialFValues = {
  avgIncome: "",
  leaveDays: "",
  tuberChecked: false,
};

const initialCValues = {
  days: 0,
  allowance: 0,
  employerCompensation: 0,
  insuranceCompensation: 0,
  empDays: 0,
  insDays : 0,
  total : 0
};

const FormLayout = () => {
  const [values, setValues] = useState(initialFValues);
  const [compensate, setCompensate] = useState(initialCValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const modifiedVal =
      name === "tuberChecked" && value === "false"
        ? true
        : name === "tuberChecked" && value === "true"
        ? false
        : value;
    setValues({
      ...values,
      [name]: modifiedVal,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let days = +values.leaveDays;
    let income = +values.avgIncome;
    let tubeChecked = values.tuberChecked;
    const { total, empDays,insDays , allowance, employerCompensation, insuranceCompensation } =
      calculateCompansation(days, income, tubeChecked);
    setCompensate({
      ...compensate,
      days: values.leaveDays,
      allowance: allowance,
      employerCompensation: employerCompensation,
      insuranceCompensation: insuranceCompensation,
      empDays : empDays,
      insDays : insDays,
      total : total
    });
  };


  return (
    <aside className={styles["form-wrap"]}>
      <Typography variant="h4" className={styles["form-header"]}>
        Compensation Calculator
      </Typography>
      <FormContainer
        values={values}
        onChangeFunc={handleInputChange}
        submitHandler={submitHandler}
      />
      <div className={styles["divider"]}></div>
      <Compensation
        empDays={compensate.empDays}
        insDays= {compensate.insDays}
        allowance={compensate.allowance}
        employerCompensation={compensate.employerCompensation}
        insuranceCompensation={compensate.insuranceCompensation}
      />
      <div className={styles["divider"]}></div>
      <div className={styles["result-foot"]}>
        <p>{`Compensation total for ${compensate.days} days (net)`}</p>
        <p>{compensate.total}</p>
      </div>
    </aside>
  );
};

export default FormLayout;
