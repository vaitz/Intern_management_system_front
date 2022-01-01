import validator from 'validator'

export function validatePassword(password){
    return validator.isStrongPassword(password,{minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0});
};

export function validateUsername(username){
    return validator.isAlphanumeric(username,{minLength: 4});
};

export function validateEmail(email){
    return validator.isEmail(email);
};

