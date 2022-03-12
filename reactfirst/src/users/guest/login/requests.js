import {setUserSession} from "../../../utils/common";
import {SERVER_ADDRESS} from '../../../config'


export const loginRequest = (setLoading, setError, username, password, setUserType, setFirstName,setProgramId) => {
    const data = {
        username: username.value,
        password: password.value
    }
    fetch(SERVER_ADDRESS+'/users/login',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(data)
    }).then(response => response.json().then(data => {
        setLoading(false);
        setUserType(data.userType);
        setUserSession(data.session, data.username);
        setFirstName(data.firstName)
        setProgramId(data.program)
        return response;
    }
).catch(error => {
    setLoading(false);
    if (error.response.status === 401) setError(error.response.data.message);
    else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
}));
    return "dd";
}
