import React from "react";
import { default as pt } from 'prop-types'; 
import { FormLabel , FormControl , InputAdornment ,OutlinedInput } from "@mui/material";

import styles from './form.module.scss'

const FormInput = ({id,label,adornment,onInputChange,value,name}) => {
    return (
        <FormControl sx={{ m: 1, width: '280px' }} variant="outlined">
        <FormLabel id="outlined-weight-helper-text" className={styles['inpt-label']}>{label}</FormLabel>
        <OutlinedInput
          id={id}
          value={value}
          className={styles['input-cont']}
          name={name}
          type='number'
          onChange={onInputChange}
          endAdornment={<InputAdornment position="end" className={styles['inpt-ador']}>{adornment}</InputAdornment>}
          inputProps={{
            className : styles['input-val']
          }}
        />
      </FormControl>
    )
}

FormInput.propTypes = {
    id : pt.string.isRequired,
    label : pt.string,
    adornment : pt.string,
    onInputChange : pt.func.isRequired
}

export default FormInput;