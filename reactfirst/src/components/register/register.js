import React, {useState} from 'react';
import PopUp from '../popup';

const userTypes= ["סטודנט", "נציג חברה", "מנטור", "מנהל תוכנית התמחות", "רכז תוכנית התמחות"]

const Register = () => {
    // States for managing the registration form
    const [isChecked, setIsChecked] = useState(false);
    const [openPopUp, setOpenPopUp] = useState(false);

    // State for registration
    const [state , setState] = useState({
        userType: "סטודנט",
        username: "",
        firstname: "",
        lastname: "",
        email : "",
        password : "",
        confirmPassword : ""
    })


    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault(); //?
        if(state.password === state.confirmPassword) {
            // sendDetailsToServer() - send hashed password to the server
            // check the validation of the password 
            // check the validation of the username 
        } else {
            // props.showError('Passwords do not match');
            console.log('Passwords do not match');
        }
    }

    const checked = (e) => {
        setIsChecked(e.target.checked);
    }

    const clicked = (e) => {
        setOpenPopUp(!openPopUp);
    }

    return (
        <div>
            <div>
                <label>סוג משתמש</label>
                <select id="userType" value={state.userType} onChange={handleChange}>
                    {userTypes && userTypes.map(option => <option value={option}>{option}</option>)}
                </select>
            </div>
            <div>
                <label>שם משתמש:</label>
                <input type="text" 
                        id="username" 
                        placeholder="הכנס\י שם משתמש" 
                        value={state.username}
                        onChange={handleChange}
                />
            </div>
            <div>
                <label>סיסמא:</label>
                <input type="password" 
                        id="password" 
                        placeholder="הכנס\י סיסמא" 
                        value={state.password}
                        onChange={handleChange}
                />
                <label>6 תווים לפחות המשלבת אותיות באנגלית ומספרים</label>
            </div>
            <div>
                <label>אימות סיסמא:</label>
                <input type="password" 
                        id="confirmPassword" 
                        placeholder="הכנס\י סיסמא בשנית" 
                        value={state.confirmPassword}
                        onChange={handleChange}
                />
            </div>
            <div>
                <label>שם פרטי:</label>
                <input type="text" 
                        id="firstname" 
                        placeholder="הכנס\י שם פרטי" 
                        value={state.firstname}
                        onChange={handleChange}
                />
            </div>
            <div>
                <label>שם משפחה:</label>
                <input type="text" 
                        id="lastname" 
                        placeholder="הכנס\י שם משפחה" 
                        value={state.lastname}
                        onChange={handleChange}
                />
            </div>
            <div>
                <label>דוא"ל:</label>
                <input type="email" 
                        id="email" 
                        placeholder="הכנס\י כתובת מייל" 
                        value={state.email}
                        onChange={handleChange}
                />
            </div>
            
            {state.userType === "סטודנט" && 
            <div>
                <PopUp trigger={openPopUp} setTrigger={clicked}>
                    <h3>הצהרת רצינות</h3>
                    <p>בלה בלה בלה....</p>
                </PopUp>
                <button onClick={clicked}>כניסה להצהרת רצינות</button>
                <div>
                    <input id="isChecked" type="checkbox" onChange={checked}/>
                    {/* link to the statement */}
                    <label>קראתי את הצהרת הרצינות ואני מסכים\מה עם הנאמר</label>
                </div>
                <button 
                        type="submit" 
                        onClick={handleSubmitClick}
                        disabled={!isChecked}
                >
                    הרשמה
                </button>
            </div>
            }
            {(state.userType === "נציג חברה" || state.userType === "מנטור") && 
                <div>
                    <label>שם חברה:</label>
                    <input type="text" 
                            id="company" 
                            placeholder="הכנס\י את שם החברה" 
                    />
                </div>
            }
            {!(state.userType === "סטודנט") && 
            <button 
                    type="submit" 
                    onClick={handleSubmitClick}
            >
                הרשמה
            </button>
            }
        </div>
    );
};

export default Register;