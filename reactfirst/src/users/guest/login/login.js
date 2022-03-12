import React, { useState } from 'react';
import {loginRequest} from "./requests";
import {useHistory} from "react-router-dom";
import {validateEmptyFields} from "./validations";

function Login({setUserType, setFirstName, setProgramId}) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    let history = useHistory();

    const onClick = () => {
        if(!validateEmptyFields([username.value, password.value])){
            setError(`אסור להשאיר שדות ריקים`);
        }else{
            const response = loginRequest(setLoading, setError, username, password, setUserType, setFirstName, setProgramId);
            if(response){
                history.push("/njsw36/");
            }
            else {

            }
        }
    }

    return (
        <div>
            התחבר למערכת<br /><br />
            <div>
                שם משתמש<br />
                <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                סיסמא<br />
                <input type="password" {...password} autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'טוען...' : 'התחבר'} onClick={() => onClick()} disabled={loading} /><br />
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;