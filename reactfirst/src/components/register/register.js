import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import PopUp from '../popup';
import {validatePassword, validateUsername, validateEmptyFields, validateEmail} from './validations'
import {sendDetailsToServer} from './requests';
import { useHistory } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Label =  styled.text`
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
`

const Input = styled.input`
  width:  500px;
  height: 20px;
`

const Select = styled.select`
  width:  500px;
  height: 20px;
`

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 20px 300px;
  background: #7A5CFA;
  color: white;
`

const Div = styled.div`
  margin-top: 50px;
`

const TextLink = styled.a`
      color: blue;
      border: none;
      background: transparent;
      outline: none;
      cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
      text-decoration: none;
      &:hover {
        text-decoration: ${({ disabled }) => (disabled ? "none" : "underline")};
      }
`;

const userTypes= ["סטודנט", "נציג חברה", "מנטור", "מנהל תוכנית התמחות", "רכז תוכנית התמחות"]

const Register = () => {
    let history = useHistory();
    
    // States for managing the registration form
    const [isChecked, setIsChecked] = useState(false);
    const [openPopUpStatement, setOpenPopUpStatement] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    // State for registration
    const [state , setState] = useState({
        userType: "סטודנט",
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const handleChange = (e) => {
        const {id , value} = e.target;
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    useEffect(() => {
        console.log(error);
    }, [error, submitted]);

    const handleSubmitClick = async (e) => {
        if(!validateEmptyFields(state)){
            setError(`אסור להשאיר שדות ריקים`);
        }else{
            if(state.password !== state.confirmPassword) {
                setError('הסיסמאות שהוקלדו לא תאומות');
            }
            else if(!validatePassword(state.password)){
                setError('סיסמא לא תקינה, יש להקפיד על ההנחיות לסיסמא');
            }
            else if(!validateUsername(state.username)){
                setError('שם משתמש לא תקין, יש להקפיד על שם משתמש באנגלית');
            }
            else if(!validateEmail(state.email)){
                setError('אימייל לא תקין, יש להקפיד על כתובת אימייל חוקית');
            }
            else{
                const success = await sendDetailsToServer(state);
                console.log(success);
                if(success){
                    // show massage that the register succeed and redirect to login page
                    setSubmitted(true);
                } else {
                    setError('שם המשתמש קיים במערכת, נא לבחור שם משתמש אחר');
                }
            }
           
        }
    }


    const checked = (e) => {
        setIsChecked(e.target.checked);
    }

    const clicked = (e) => {
        setOpenPopUpStatement(!openPopUpStatement);
    }


    // Showing success message
    const successMessage = () => {
        return (
        <PopUp trigger={submitted} setTrigger={()=>{history.push('/login');}}>
            <h3>ההרשמה בוצעה בהצלחה!</h3>
            <button onClick={()=>{history.push('/login');}}>ok</button>
        </PopUp>
        );
    };
 
     // Showing error message if error is true
    const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            {<span style={{
                fontWeight: 'bold',
                color: 'red',
                }}>{error}</span>}

          </div>
        );
      };

    return (
        <Container>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <Label>סוג משתמש</Label>
            <Select id="userType" value={state.userType} onChange={handleChange}>
                {userTypes && userTypes.map(option => <option key={option} value={option}>{option}</option>)}
            </Select>
            <Label>שם משתמש:</Label>
            <Input type="text" 
                    id="username" 
                    placeholder="הכנס\י שם משתמש" 
                    value={state.username}
                    onChange={handleChange}
                    required 
            />

            <Label>סיסמא:</Label>
            <Input type="password" 
                    id="password" 
                    placeholder="הכנס\י סיסמא" 
                    value={state.password}
                    onChange={handleChange}
                    required 
            />
            <label>(צריכה להכיל לפחות 6 תווים ולשלב בתוכה אותיות גדולות וקטנות באנגלית ומספרים)</label>
            

            <Label>אימות סיסמא:</Label>
            <Input type="password" 
                    id="confirmPassword" 
                    placeholder="הכנס\י סיסמא בשנית" 
                    value={state.confirmPassword}
                    onChange={handleChange}
                    required 
            />


            <Label>שם פרטי:</Label>
            <Input type="text" 
                    id="firstname" 
                    placeholder="הכנס\י שם פרטי" 
                    value={state.firstname}
                    onChange={handleChange}
                    required 
            />


            <Label>שם משפחה:</Label>
            <Input type="text" 
                    id="lastname" 
                    placeholder="הכנס\י שם משפחה" 
                    value={state.lastname}
                    onChange={handleChange}
                    required 
            />

            <Label>דוא"ל:</Label>
            <Input type="email" 
                    id="email" 
                    placeholder="הכנס\י כתובת מייל" 
                    value={state.email}
                    onChange={handleChange}
                    required 
            />
            {state.userType === "סטודנט" && 
            <div>
                <PopUp trigger={openPopUpStatement} setTrigger={clicked}>
                    <h3>הצהרת רצינות</h3>
                    <p>בלה בלה בלה....</p>
                </PopUp>
                
                <Div/>
                <input id="isChecked" type="checkbox" onChange={checked}/>
                <label>קראתי את <TextLink onClick={clicked}> הצהרת הרצינות</TextLink> ואני מסכים\מה עם הנאמר  </label>
                <Div/>
                <Button
                        type="submit"
                        onClick={handleSubmitClick}
                        disabled={!isChecked}
                >
                    הרשמה
                </Button>
            </div>
            }
            {(state.userType === "נציג חברה" || state.userType === "מנטור") && 
            <Container>
                <Label>שם חברה:</Label>
                <Input type="text" 
                        id="company" 
                        placeholder="הכנס\י את שם החברה" 
                        required 
                />
            </Container>
            }
            {!(state.userType === "סטודנט") && 
            <Button 
                    onClick={handleSubmitClick}
            >
                הרשמה
            </Button>
            }
           
        </Container>
    );
};

export default Register;