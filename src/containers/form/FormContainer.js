import React from "react";
import FormInput from "../../common/components/Input/FormInput";
import CustomCheckBox from "../../common/components/CheckBox/CustomCheckBox"
import CalculateButton from "../../common/components/Button/CalculateButton";

import styles from './form.module.scss'

const FormContainer = ({values , onChangeFunc , submitHandler}) => {
    return (<form className={styles['form-cont']} onSubmit={submitHandler}>
        <FormInput
            id={'inc'}
            label={'Average income'}
            adornment={'€'}
            value={values.avgIncome}
            onInputChange={onChangeFunc}
            name={'avgIncome'}
        />
          <FormInput
            id={'sck'}
            label={'Days on sick-leave'}
            adornment={'days'}
            value={values.leaveDays}
            onInputChange={onChangeFunc}
            name={'leaveDays'}
        />
        <CustomCheckBox 
            label={'I have tubercolosis'}
            value={values.tuberChecked}
            onCheck = {onChangeFunc}
            name={'tuberChecked'}
        />
        <CalculateButton content={'Calculate'}/>
        </form>)
}


export default FormContainer