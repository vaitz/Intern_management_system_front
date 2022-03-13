import fetchMock from "fetch-mock";
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

//create program
const data = [{firstName: "חי", lastName: "מתתיהו", id: 1}, { firstName: "מאי", lastName: "וייץ", id: 2 }] ;
fetchMock.mock(SERVER_ADDRESS+'/programManagers', data);
fetchMock.mock(SERVER_ADDRESS+'/admin/openProgram', "success");
