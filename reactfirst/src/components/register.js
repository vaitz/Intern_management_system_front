import React, {useState} from 'react';

const userTypes= ["student", "company representative", "mentor"]

const Register = () => {
    // // States for registration
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [state , setState] = useState({
        userType: "student",
        firstname: "",
        lastname: "",
        email : "",
        password : "",
        confirmPassword : "",
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            // sendDetailsToServer()    
        } else {
            // props.showError('Passwords do not match');
            console.log('Passwords do not match');
        }
    }

    return (
        <div>
            <div>
                
            </div>
            <div>
            <label>firstname:</label>
            <input type="firstname" 
                    id="firstname" 
                    placeholder="Enter firstname" 
                    value={state.firstname}
                    onChange={handleChange}
            />
            </div>
            <div>
            <label>lastname:</label>
            <input type="lastname" 
                    id="lastname" 
                    placeholder="Enter lastname" 
                    value={state.lastname}
                    onChange={handleChange}
            />
            </div>
            <div>
            <label>email:</label>
            <input type="email" 
                    id="email" 
                    placeholder="Enter email" 
                    value={state.email}
                    onChange={handleChange}
            />
            </div>
            <div>
            <label>password:</label>
            <input type="password" 
                    id="password" 
                    placeholder="Enter password" 
                    value={state.password}
                    onChange={handleChange}
            />
            </div>
            <div>
            <label>confirm password:</label>
            <input type="confirmPassword" 
                    id="confirmPassword" 
                    placeholder="Enter password again" 
                    value={state.confirmPassword}
                    onChange={handleChange}
            />
            </div>
            {state.userType === "student" && <lable>Statement of seriousness</lable>}
            <button 
                    type="submit" 
                    onClick={handleSubmitClick}
            >
                Register
            </button>
        </div>
    );
};

export default Register;