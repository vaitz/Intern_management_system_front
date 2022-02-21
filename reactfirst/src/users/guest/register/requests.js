import fetchMock from 'fetch-mock';
import {SERVER_ADDRESS} from '../../../config'
import {STUDENT_HEBREW, COMPANY_REPRESENTATIVE_HEBREW, MENTOR_HEBREW, PROGRAM_MANAGER_HEBREW, PROGRAM_COORDINATOR_HEBREW} from "../../../constants"


fetchMock.mock(SERVER_ADDRESS+'/users/register/student', 201);
fetchMock.mock(SERVER_ADDRESS+'/users/register/company', 201);
fetchMock.mock(SERVER_ADDRESS+'/users/register/program', 201);

export async function sendDetailsToServer({userType, username, firstname, lastname, email, password, companyName}){
    // need to hash the password in the server, suppose to return error if username exists (or other)
    var data = null;
    var endpoint_address = null;
    if(userType === STUDENT_HEBREW){
        data = {
            "username": username,
            "firstName": firstname,
            "lastName": lastname,
            "password": password,
            "email": email
        }
        
        endpoint_address = SERVER_ADDRESS+'/users/register/student';
    }
    else if(userType === PROGRAM_MANAGER_HEBREW || userType === PROGRAM_COORDINATOR_HEBREW){
        data = {
            "manager": userType === PROGRAM_MANAGER_HEBREW,
            "username": username,
            "firstName": firstname,
            "lastName": lastname,
            "password": password,
            "email": email,
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/company';
    }
    else if(userType === COMPANY_REPRESENTATIVE_HEBREW || userType === MENTOR_HEBREW){
        data = {
            "mentor": userType === MENTOR_HEBREW,
            "username": username,
            "firstName": firstname,
            "lastName": lastname,
            "password": password,
            "email": email,
            "companyName": companyName
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/program';
    }

    if(data != null && endpoint_address != null){
        console.log(data);
        const res = await fetch(endpoint_address,
                {
                    method: 'POST',
                    mode: "cors",
                    body: JSON.stringify(data)
                }).then(response => {
                console.log("post",response);
                return (response.status === 201);
            })
        return res;
    }
    return false;
    //  todo: check if the user exists in the response
};
