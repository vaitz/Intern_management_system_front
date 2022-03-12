import {SERVER_ADDRESS} from './config'
import fetchMock from "fetch-mock";
import {SYSTEM_MANAGER} from "./constants";
import {setUserSession} from "./utils/common";

export const logoutRequest  = () => {
    fetch(SERVER_ADDRESS+ `/users/logout`,
        {
            method: 'Get',
            mode: "cors",
        }
    ).then(res => console.log("here"))
}

export const getDetails  = (username,setUserType,setFirstName,setProgramId) => {
    const res = fetch(SERVER_ADDRESS + `/users/details/` + username,
        {
            method: 'Get',
            mode: "cors",
        }
    ).then(response => response.json().then(data => {
        if(response.status === 200) {
            setUserType(data.userType);
            setFirstName(data.firstName)
            if (data.program) {
                setProgramId(data.program)
            }
        }
    }));
}

fetchMock.mock(SERVER_ADDRESS+ `/users/logout` ,{data: ""});
fetchMock.mock(SERVER_ADDRESS+ `/users/details/user` ,{status: 200, userType: SYSTEM_MANAGER, firstName: "hay", program: "star"});