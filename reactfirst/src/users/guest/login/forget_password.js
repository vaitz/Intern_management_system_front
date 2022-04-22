import React, { useState } from 'react';
import {useHistory, Link} from "react-router-dom";
import {validateEmptyFields} from "../../guest/login/validations";
import {changePassRequest} from "./requests";
import {validateEmail, validatePassword} from "../../guest/register/validations";
import PopUp from "../../../components/popup";

// email page
export function ForgetPassEmail() {
    const [loading, setLoading] = useState(false);
    const email = useFormInput('');
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);


    let history = useHistory();

    // Showing success message
    const successMessage = () => {
        return (
            <PopUp trigger={submitted} setTrigger={()=>{history.push('/njsw36');}}>
                <h3>אימייל עם קישור לעדכון הסיסמה נשלח, נא לבדוק בתיבת הדואר הנכנס</h3>
                <button onClick={()=>{history.push('/njsw36');}}>ok</button>
            </PopUp>
        );
    };


    const onClick = async () => {
        if(!validateEmptyFields([email.value])){
            setError(`אסור להשאיר שדות ריקים`);
        }else{
            if (!validateEmail(email.value)) {
                setError('אימייל לא תקין, יש להקפיד על כתובת אימייל חוקית');
            } else{
                    // const response = await changePassRequest(setLoading, setError, username, oldPassword, password, history);
                    // if(response){
                        setSubmitted(true);

                // else- email not related to a user (show error?)


            }
        }
    }

    return (
        <div>
            {successMessage()}
            <div>
                <h1>שכחתי סיסמה</h1>
                <label style={{ fontSize: 14 }}>יש להכניס את האימייל העדכני המקושר לחשבון המשתמש שלך</label>
                <br /><br />
            </div>
            <div style={{ marginTop: 10 }}>
                אימייל:<br />
                <input type="email"
                       {...email}
                       placeholder="הכנס\י כתובת אימייל"
                       autoComplete="email" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'טוען...' : 'שלח'} onClick={() => onClick()} disabled={loading} /><br />
        </div>
    );
}

// new password page
export function ForgetPass() {
    const [loading, setLoading] = useState(false);
    const password = useFormInput('');
    const confirmPassword = useFormInput('');
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);


    let history = useHistory();

    // Showing success message
    const successMessage = () => {
        return (
            <PopUp trigger={submitted} setTrigger={()=>{history.push('/njsw36/login');}}>
                <h3>עדכון הסיסמה בוצע בהצלחה!</h3>
                <button onClick={()=>{history.push('/njsw36/login');}}>ok</button>
            </PopUp>
        );
    };


    const onClick = async () => {
        if(!validateEmptyFields([password.value, confirmPassword.value])){
            setError(`אסור להשאיר שדות ריקים`);
        }else{
            if (password.value !== confirmPassword.value) {
                setError('הסיסמאות שהוקלדו לא תאומות');
            } else{
                if(!validatePassword(password.value)){
                    setError('סיסמה לא תקינה, יש להקפיד על ההנחיות לסיסמה');
                } else {
                    // const response = await changePassRequest(setLoading, setError, username??, password, history);
                    // if(response){
                    //     setSubmitted(true);
                    // }
                }
            }
        }
    }

    return (
        <div>
            {successMessage()}
            <div>
                <h1>עדכון סיסמה</h1>
                <label style={{ fontSize: 14 }}>הסיסמה החדשה צריכה להכיל לפחות 6 תווים ולשלב בתוכה אותיות גדולות וקטנות באנגלית ומספרים</label>
                <br /><br />
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