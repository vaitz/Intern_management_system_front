import {SERVER_ADDRESS} from '../../../config'


export const getProgramManagers = (setOptions, formatOptions) => fetch(SERVER_ADDRESS+'/programManagers')
    .then((response) => {
        response.json().then(data => setOptions(formatOptions(data)));
    })


export const createProgram = (internshipName, year, semester, prioritiesAmount, programManager, hoursRequired, department) => {
    const data = {
        program: internshipName,
        year: year,
        semester: semester,
        prioritiesAmount: prioritiesAmount,
        programManager: programManager,
        hoursRequired: hoursRequired,
        department: department
    }
    const response = fetch(SERVER_ADDRESS+'/admin/openProgram',
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => console.log(data)));
}

