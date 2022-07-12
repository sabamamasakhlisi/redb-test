import React from "react";
import {Button} from '@mui/material'

import styles from './btnStyle.module.scss'

const CalculateButton = ({content})=> {
    return <Button variant="outlined" className={styles['calculate-btn']} type="submit">{content}</Button>
}


export default CalculateButton;