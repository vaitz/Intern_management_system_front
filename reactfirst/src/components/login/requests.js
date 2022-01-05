import axios from "axios";
import {setUserSession} from "../utils/common";
import MockAdapter from "axios-mock-adapter";

export const loginRequest = (setLoading, setError, username, password) => {axios.post('http://localhost:3000/users/login', { username: username.value, password: password.value }).then(response => {
    setLoading(false);
    console.log(response)
    setUserSession(response.data.token, response.data.user);
    console.log(response)
}).catch(error => {
    setLoading(false);
    if (error.response.status === 401) setError(error.response.data.message);
    else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
});}

const mock = new MockAdapter(axios);
const data =  { token: 2, user: "user" } ;
mock.onPost('http://localhost:3000/users/login').reply(200, data);