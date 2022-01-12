import fetchMock from 'fetch-mock';
import {SERVER_ADDRESS} from '../../config'

fetchMock.mock(SERVER_ADDRESS+'/users/register/student', 201);

export async function sendDetailsToServer({userType, username, firstname, lastname, email, password}){
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
};
