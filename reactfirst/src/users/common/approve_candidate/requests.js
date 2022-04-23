import {SERVER_ADDRESS} from "../../../config";




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

export const approveCandidates = (username, program, approved) => {
    const data = {
        "username": username,
        "program": program.label,
        "approved": approved
    }

    console.log(data);

    return fetch(SERVER_ADDRESS+`/companyRep/setStatus`,
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
