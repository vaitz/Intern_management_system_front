import fetchMock from "fetch-mock";
import Cookies from "universal-cookie";

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
    }).then(response => response.json().then(response => {
        if(response.status === "200"){
            setLoading(false);
            // setUserSession(data.token, data.user);
            const cookies = new Cookies();
            cookies.set("cookie", username, { path: '/' });
        }
        else {
            setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
        }
    }
).catch(error => {
    setLoading(false);
    if (error.response.status === 401) setError(error.response.data.message);
    else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
}));
}

const data =  {data:{ token: 2, user: "user" }, status: "200"} ;
fetchMock.mock('http://localhost:3000/users/login', data);