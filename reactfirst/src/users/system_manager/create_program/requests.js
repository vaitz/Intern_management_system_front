import {SERVER_ADDRESS} from '../../../config'


export const getProgramManagers = (setOptions) => fetch(SERVER_ADDRESS+'/programManagers')
    .then((response) => {
        response.json().then(data => setOptions(data));
    })


export const createProgram = (internshipName, year, semester, programManager, hoursRequired, department) => {
    const data = {
        "program name": internshipName,
        "year": year,
        "semester": semester,
        "program manager": programManager,
        "hours required": hoursRequired,
        "department": department
    }
    const response = fetch(SERVER_ADDRESS+'/admin/openProgram',
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => console.log(data)));
}

