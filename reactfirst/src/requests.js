import {SERVER_ADDRESS} from './config'

export const logoutRequest  = (token) => {
    const data = {"Authentication": token};
    console.log(data);
    fetch(SERVER_ADDRESS+ `/users/logout`,
        {
            method: 'POST',
            mode: "cors",
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