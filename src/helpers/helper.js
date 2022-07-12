import dt from '../common/constants/index'

const displayNum = num => {
    return num.toString().replace('.',',') + '€';
}

const formatNumber = (num) => {
    return displayNum((Math.round(num * 100) / 100).toFixed(2));
}

const calculateCompansation = (days,income,tube) => {
    let finalObj = {
        days: 0,
        empDays : 0,
        insDays : 0,
        allowance : 0,
        employerCompensation: 0,
        insuranceCompensation: 0,
        total : 0
    }
    let dayili = days > 3 && income ? (income/31) * dt.compensationPer : 0;
    finalObj.allowance = dayili;
    if(days >= dt.employeeCompStartDay && days <= dt.employeeCompLastDay) {
        finalObj.employerCompensation = dayili * days;
        finalObj.empDays = days;
        finalObj.insDays = 0;
    } else if (days >= dt.insuranceCompStartDay && !tube) {
        if(days >= dt.maxInsuranceDuration) {
            finalObj.employerCompensation = dayili * 8;
            finalObj.insuranceCompensation = dayili * (dt.maxInsuranceDuration - 8);
            finalObj.empDays = 8;
            finalObj.insDays = (dt.maxInsuranceDuration - 8);
        } else {
            finalObj.employerCompensation = dayili * 8;
            finalObj.insuranceCompensation = dayili * (days - 8);
            finalObj.empDays = 8;
            finalObj.insDays = (days - 8);
        }
    } else if(days >= dt.insuranceCompStartDay && tube) {
        if(days > dt.maxInsuranceDurationFlagged) {
            finalObj.employerCompensation = dayili * 8;
            finalObj.insuranceCompensation = dayili * (dt.maxInsuranceDurationFlagged - 8);
            finalObj.empDays = 8;
            finalObj.insDays = (dt.maxInsuranceDurationFlagged - 8);
        } else {
            finalObj.employerCompensation = dayili * 8;
            finalObj.insuranceCompensation = dayili * (days - 8);
            finalObj.empDays = 8;
            finalObj.insDays = (days - 8);
        }
    }
    finalObj.total = formatNumber(finalObj.employerCompensation + finalObj.insuranceCompensation)
    finalObj.allowance = formatNumber(finalObj.allowance);
    finalObj.employerCompensation = formatNumber(finalObj.employerCompensation);
    finalObj.insuranceCompensation = formatNumber(finalObj.insuranceCompensation);
    return finalObj;
}

export {formatNumber,calculateCompansation}