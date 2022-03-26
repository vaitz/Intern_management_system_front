import validator from 'validator'
import {STUDENT, COMPANY_REPRESENTATIVE, MENTOR} from "../../../constants"


export function validatePassword(password){
    return validator.isStrongPassword(password,{minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0});
};

export function validateUsername(username){
    return validator.isAlphanumeric(username,'en-US');
};

export function validateEmail(email){
    return validator.isEmail(email);
};

export function validateEmptyFields(fields){
    for(const field in fields){
        if(field === "companyName" && (fields.userType !== COMPANY_REPRESENTATIVE || fields.userType !== MENTOR)){
            continue;
        }
        if(field === "program" && (fields.userType !== STUDENT)){
            continue;
        }
        if(validator.isEmpty(fields[field])){
            return false;
        }
    }
    return true;
};

