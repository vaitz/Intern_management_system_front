import {SERVER_ADDRESS} from '../../../config'
import fetchMock from "fetch-mock";

export function sendDetailsToServer({userType, username, firstname, lastname, email, password}){
    // need to hash the password in the server, suppose to return error if username exists (or other)
    if(userType === "סטודנט"){
        const data = {
            "username": username,
            "firstName": firstname,
            "lastName": lastname,
            "password": password,
            "email": email
        }
        console.log(data);
        const response =  fetch(SERVER_ADDRESS+'/users/register/student',
            {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify(data)
            }).then(response => {
            console.log("post",response);
            console.log(response.status);
            return (response.status === 201);
        })
    }
};

fetchMock.mock(SERVER_ADDRESS+'/users/register/student', 201);
