import fetchMock from 'fetch-mock';
import {SERVER_ADDRESS} from '../../../config'
import {STUDENT, COMPANY_REPRESENTATIVE, MENTOR, PROGRAM_MANAGER, PROGRAM_COORDINATOR} from "../../../constants"


fetchMock.mock(SERVER_ADDRESS+'/users/register/student', 201);
fetchMock.mock(SERVER_ADDRESS+'/users/register/companyRep', 201);
fetchMock.mock(SERVER_ADDRESS+'/users/register/mentor', 201);
fetchMock.mock(SERVER_ADDRESS+'/users/register/programCoordinator', 201);
fetchMock.mock(SERVER_ADDRESS+'/users/register/programManager', 201);
// fetchMock.mock(SERVER_ADDRESS+'/activePrograms', ["starships","פסיכולוגיה"]);

export const getPrograms = (setPrograms) => {
    fetch(SERVER_ADDRESS+'/activePrograms',
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
        response.json().then(data => {
            let tempData = [""];
            tempData.push(...data);
            setPrograms(tempData);
        });
    }).catch(error => {
        console.log("error");
    });
}

export async function sendDetailsToServer({userType, username, firstname, lastname, email, password, companyName, program}){
    // need to hash the password in the server, suppose to return error if username exists (or other)
    let data = null;
    let endpoint_address = null;
    if(userType === STUDENT){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email,
            "program": program
        }
        
        endpoint_address = SERVER_ADDRESS+'/users/register/student';
    }
    else if(userType === COMPANY_REPRESENTATIVE){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email,
            "companyName": companyName
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/companyRep';
    }
    else if(userType === MENTOR){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email,
            "companyName": companyName
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/mentor';
    }
    else if(userType === PROGRAM_COORDINATOR){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email,
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/programCoordinator';
    }

    else if(userType === PROGRAM_MANAGER){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email,
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/programManager';
    }

    if(data != null && endpoint_address != null){
        console.log(data);
        const res = await fetch(endpoint_address,
                {
                    method: 'POST',
                    mode: "cors",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
        console.log("post",res);
        return res;
    }
    return false;
};
