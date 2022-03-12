import {SERVER_ADDRESS} from '../../../config'
import fetchMock from "fetch-mock";

export const logoutRequest  = () => {
    fetch(SERVER_ADDRESS+ `/users/logout`,
        {
            method: 'Get',
            mode: "cors",
        }
    ).then(res => console.log("here"))
}

fetchMock.mock(SERVER_ADDRESS+ `/users/logout` ,{data: ""});