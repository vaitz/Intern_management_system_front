import {SERVER_ADDRESS} from "../../../config";
import fetchMock from "fetch-mock";

export const getCandidates = (username, userType, program, setCandidates, formatCandidates) => {
    fetch(SERVER_ADDRESS+`/${userType}/${username}/candidates/${program.label}`,
        {
            method: 'Get',
            mode: "cors",
        }).then(response => response.json().then(data => {
        setCandidates(formatCandidates(data));
        }
    ).catch(error => {
        console.log("error");
    }));
}

const data = [
    {
        username: "haymatit",
        first_name: "hay",
        last_name: "matityaho",
        internship_id: "2030",
        internship_name: "google-1",
        priority: 1,
        status_decision_by_company: false
    },
    {
        username: "haymatit",
        first_name: "hay",
        last_name: "matityaho",
        internship_id: "2030",
        internship_name: "google-1",
        priority: 1,
        status_decision_by_company: false
    },
    {
        username: "haymatit2",
        first_name: "hay2",
        last_name: "matityaho2",
        internship_id: "2031",
        internship_name: "google-2",
        priority: 2,
        status_decision_by_company: true
    }
]

const data2 = [
    {
        username: "haymatit",
        first_name: "hay",
        last_name: "matityaho",
        internship_id: "2030",
        internship_name: "google-1",
        priority: 1
    }
]
fetchMock.mock(SERVER_ADDRESS+'/mentor/user/candidates/123', data);
fetchMock.mock(SERVER_ADDRESS+'/mentor/user/candidates/122', data2);

export const approveCandidates = (username, userType, program, approved) => {
    const data = {
        "username": username,
        "program": program.label,
        "approved": approved
    }

    return fetch(SERVER_ADDRESS+`/${userType}/setStatus`,
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => console.log(response));
}

fetchMock.mock(SERVER_ADDRESS + '/mentor/setStatus', {status: 200});
