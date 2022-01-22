import validator from 'validator'

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
        if(validator.isEmpty(fields[field])){
            return false;
        }
    }
    return true;
};

