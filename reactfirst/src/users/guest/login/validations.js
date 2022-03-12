import validator from 'validator'

export function validateEmptyFields(fields){
    for(const field in fields){
        if(validator.isEmpty(fields[field])){
            return false;
        }
    }
    return true;
};

