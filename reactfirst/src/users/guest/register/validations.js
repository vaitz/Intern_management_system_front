import validator from 'validator'
import {STUDENT_HEBREW, COMPANY_REPRESENTATIVE_HEBREW, MENTOR_HEBREW, PROGRAM_MANAGER_HEBREW, PROGRAM_COORDINATOR_HEBREW} from "../../../constants"


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
        if(field === "companyName" && (fields.userType !== COMPANY_REPRESENTATIVE_HEBREW || fields.userType !== MENTOR_HEBREW)){
            continue;
        }
        if(field === "program" && (fields.userType !== STUDENT_HEBREW)){
            continue;
        }
        if(validator.isEmpty(fields[field])){
            return false;
        }
    }
    return true;
};

