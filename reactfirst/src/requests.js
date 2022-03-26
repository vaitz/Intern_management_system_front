import {SERVER_ADDRESS} from './config'
import fetchMock from "fetch-mock";
import {ADVANCED_CANDIDATE, SYSTEM_MANAGER} from "./constants";

export const logoutRequest  = (token) => {
    const data = {"Authorization": token};
    console.log(data);
    fetch(SERVER_ADDRESS+ `/users/logout`,
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    ).then(res => console.log(res))
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

const data =  { userType: ADVANCED_CANDIDATE, session: 2, username: "user", firstName: "חי", program: "123" } ;
fetchMock.mock(SERVER_ADDRESS+ `/users/logout` ,{data: ""});
fetchMock.mock(SERVER_ADDRESS+ `/users/details/user`, data);