import {SERVER_ADDRESS} from './config'
import fetchMock from "fetch-mock";
import {SYSTEM_MANAGER} from "./constants";

export const logoutRequest  = () => {
    fetch(SERVER_ADDRESS+ `/users/logout`,
        {
            method: 'Get',
            mode: "cors",
        }
    ).then(res => console.log("here"))
}

export const getDetails  = (username) => {
    fetch(SERVER_ADDRESS+ `/users/details/` + username,
        {
            method: 'Get',
            mode: "cors",
        }
    ).then(res => {
        return res;
    });
    return null;
}

fetchMock.mock(SERVER_ADDRESS+ `/users/logout` ,{data: ""});
fetchMock.mock(SERVER_ADDRESS+ `/users/details/bla` ,{status: 200, userType: SYSTEM_MANAGER, firstName: "hay", program: "star"});