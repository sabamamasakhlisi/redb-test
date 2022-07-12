import React from "react";
import {default as pt} from 'prop-types'
import { FormControlLabel , Checkbox, Typography } from "@mui/material";

import styles from './checkbox.module.scss'


const CustomCheckBox = ({label,onCheck,value,name}) => {
    return (
    <FormControlLabel  control={<Checkbox onChange={onCheck} value={value} checked={value} name={name} />} label={<Typography className={styles['checkbox-label']}>{label}</Typography>} />
    )
}

CustomCheckBox.propTypes = {
    label : pt.string,
    onCheck : pt.func
}

export default CustomCheckBox;