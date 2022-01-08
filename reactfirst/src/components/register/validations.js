// import validator from 'validator'

export function validatePassword(password){
    return true;
    // return validator.isStrongPassword(password,{minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0});
};

export function validateUsername(username){
    return true;
    // return validator.isAlphanumeric(username,{minLength: 4});
};

export function validateEmail(email){
    return true;
    // return validator.isEmail(email);
};

