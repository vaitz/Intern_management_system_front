import {SERVER_ADDRESS} from './config'

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