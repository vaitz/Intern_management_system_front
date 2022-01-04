import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import {SERVER_ADDRESS} from '../../config'


// mocks
const mock = new MockAdapter(axios);
mock.onPost(SERVER_ADDRESS+'/users/register/student').reply(201, 'A new user has been added');
// mock.onPost(serverAddress+'/users/register/student').reply(400, 'A user with the same username already exists');
// mock.onPost(serverAddress+'/users/register/student').reply(500, 'Server internal error');

export function sendDetailsToServer({userType, username, firstname, lastname, email, password}){
    // need to hash the password in the server, suppose to return error if username exists (or other)
    if(userType === "סטודנט"){
        axios.post(SERVER_ADDRESS+'/users/register/student',
        {
            "username": username,
            "firstName": firstname,
            "lastName": lastname,
            "password": password,
            "email": email
        }).then(response => {
            console.log("post",response);
            console.log(response.status);
            return (response.status === 201);
        })
    }
};