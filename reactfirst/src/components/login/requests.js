import axios from "axios";
import {setUserSession} from "../utils/common";
import MockAdapter from "axios-mock-adapter";
import fetchMock from "fetch-mock";

// export const loginRequest = (setLoading, setError, username, password) => {axios.post('http://localhost:3000/users/login', { username: username.value, password: password.value }).then(response => {
//     setLoading(false);
//     setUserSession(response.data.token, response.data.user);
// }).catch(error => {
//     setLoading(false);
//     if (error.response.status === 401) setError(error.response.data.message);
//     else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
// });}
//
// const mock = new MockAdapter(axios);
// const data =  { token: 2, user: "user" } ;
// mock.onPost('http://localhost:3000/users/login').reply(200, data);



export const loginRequest = (setLoading, setError, username, password) => {
    const data = {
        username: username.value,
        password: password.value
    }
    fetch('http://localhost:3000/users/login',
    {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(data)
    }).then(response => response.json().then(data => {
        console.log(data);
        setLoading(false);
        setUserSession(data.token, data.user);
    }
).catch(error => {
    setLoading(false);
    if (error.response.status === 401) setError(error.response.data.message);
    else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
}));
}

const data =  { token: 2, user: "user" } ;
fetchMock.mock('http://localhost:3000/users/login', data);