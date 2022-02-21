import {setUserSession} from "../../../utils/common";
import {SERVER_ADDRESS} from '../../../config'
import fetchMock from "fetch-mock";
import {ADVANCED_CANDIDATE, STUDENT, INTERN, COMPANY_REPRESENTATIVE, MENTOR, PROGRAM_MANAGER, PROGRAM_COORDINATOR, SYSTEM_MANAGER} from "../../../constants";

export const loginRequest = (setLoading, setError, username, password, setUserType, setFirstName) => {
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
        return response;
    }
).catch(error => {
    setLoading(false);
    if (error.response.status === 401) setError(error.response.data.message);
    else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
}));
    return "dd";
}

const data =  { userType: INTERN, session: 2, username: "user", firstName: "חי" } ;
fetchMock.mock(SERVER_ADDRESS+'/users/login', data);