import fetchMock from 'fetch-mock';
import {SERVER_ADDRESS} from '../../../config'
import {STUDENT_HEBREW, COMPANY_REPRESENTATIVE_HEBREW, MENTOR_HEBREW, PROGRAM_MANAGER_HEBREW, PROGRAM_COORDINATOR_HEBREW} from "./constants"


fetchMock.mock(SERVER_ADDRESS+'/users/register/student', 201);
fetchMock.mock(SERVER_ADDRESS+'/users/register/company', 201);

export async function sendDetailsToServer({userType, username, firstname, lastname, email, password, companyName}){
    // need to hash the password in the server, suppose to return error if username exists (or other)
    if(userType === STUDENT_HEBREW){
        const data = {
            "username": username,
            "firstName": firstname,
            "lastName": lastname,
            "password": password,
            "email": email
        }
        console.log(data);
        const res = await fetch(SERVER_ADDRESS+'/users/register/student',
            {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify(data)
            }).then(response => {
            console.log("post",response);
            return (response.status === 201);
        })
        //  todo: check if the user exists in the response
        return res;
    }
    else if(userType === COMPANY_REPRESENTATIVE_HEBREW || userType === MENTOR_HEBREW){
        const data = {
            "mentor": userType === MENTOR_HEBREW,
            "username": username,
            "firstName": firstname,
            "lastName": lastname,
            "password": password,
            "email": email,
            "companyName": companyName
        }
        console.log(data);
        const res = await fetch(SERVER_ADDRESS+'/users/register/company',
            {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify(data)
            }).then(response => {
            console.log("post",response);
            return (response.status === 201);
        })
        //  todo: check if the user exists in the response
        return res;
    }
};
