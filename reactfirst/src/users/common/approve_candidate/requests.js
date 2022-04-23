import {SERVER_ADDRESS} from "../../../config";
import fetchMock from "fetch-mock";




export const getCandidates = (username, program, setCandidates, formatCandidates) => {
    fetch(SERVER_ADDRESS+`/companyRep/${username}/candidates/${program.label}`,
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
        priority: 1
    },
    {
        username: "haymatit2",
        first_name: "hay2",
        last_name: "matityaho2",
        internship_id: "2031",
        internship_name: "google-2",
        priority: 2
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
fetchMock.mock(SERVER_ADDRESS+'/companyRep/user/candidates/123', data);
fetchMock.mock(SERVER_ADDRESS+'/companyRep/user/candidates/122', data2);

export const approveCandidates = (username, program, approved) => {
    const data = {
        "username": username,
        "program": program,
        "approved": approved
    }

    return fetch(SERVER_ADDRESS+`/companyRep/setStatus`,
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => console.log(response));}

fetchMock.mock(SERVER_ADDRESS + '/companyRep/setStatus', {status: 200});
