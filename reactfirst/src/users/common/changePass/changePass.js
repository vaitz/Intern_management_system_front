import React, { useState } from 'react';
import {useHistory, Link} from "react-router-dom";
import {validateEmptyFields} from "../../guest/login/validations";
import {changePassRequest} from "./requests";
import {validatePassword} from "../../guest/register/validations";
import PopUp from "../../../components/popup";

function ChangePass({username}) {
    const [loading, setLoading] = useState(false);
    const oldPassword = useFormInput('');
    const password = useFormInput('');
    const confirmPassword = useFormInput('');
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);


    let history = useHistory();

    // Showing success message
    const successMessage = () => {
        return (
            <PopUp trigger={submitted} setTrigger={()=>{history.push('/njsw36/');}}>
                <h3>עדכון הסיסמא בוצע בהצלחה!</h3>
                <button onClick={()=>{history.push('/njsw36/');}}>ok</button>
            </PopUp>
        );
    };


    const onClick = async () => {
        if(!validateEmptyFields([oldPassword.value, password.value, confirmPassword.value])){
            setError(`אסור להשאיר שדות ריקים`);
        }else{
            if(password.value === oldPassword.value) {
                setError('הסיסמא החדשה חייבת להיות שונה מהישנה');
            } else {
                if (password.value !== confirmPassword.value) {
                    setError('הסיסמאות שהוקלדו לא תאומות');
                } else{
                    if(!validatePassword(password.value)){
                        setError('סיסמא לא תקינה, יש להקפיד על ההנחיות לסיסמא');
                    } else {
                        const response = await changePassRequest(setLoading, setError, username, oldPassword, password, history);
                        // const response = await changePassRequest(setLoading, setError, username, oldPassword, password, history);
                        if(response){
                            setSubmitted(true);
                        }
                    }
                }
            }
        }
    }

    return (
        <div>
            {successMessage()}
            <div>
                <h1>עדכון סיסמה</h1>
                <label style={{ fontSize: 14 }}>הסיסמא החדשה צריכה להכיל לפחות 6 תווים ולשלב בתוכה אותיות גדולות וקטנות באנגלית ומספרים</label>
                <br /><br />
            </div>
            <div>
            סיסמה ישנה<br />
            <input type="password"
                   {...oldPassword}
                   placeholder="הכנס\י סיסמה ישנה"
                   autoComplete="old-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                סיסמה חדשה<br />
                <input type="password"
                       {...password}
                       placeholder="הכנס\י סיסמה חדשה"
                       autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                אימות סיסמה חדשה<br />
                <input type="password"
                       {...confirmPassword}
                       placeholder="הכנס\י סיסמה חדשה בשנית"
                       autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'טוען...' : 'עדכון'} onClick={() => onClick()} disabled={loading} /><br />
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

export default ChangePass;