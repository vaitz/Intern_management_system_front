import {SERVER_ADDRESS} from "../../../config";

export const getInterns = (username, setInterns, formatInterns) => fetch(SERVER_ADDRESS+`/mentor/getInterns/${username}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setInterns(formatInterns(data));
    })));

export const getWorkingHours = (username, setHours, formatHours) => fetch(SERVER_ADDRESS+`/intern/getHours/${username}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setHours(formatHours(data));
    })))

export const approvedHours = (mentorUsername, internUsername, hours) => {
    const data = {
        "username": mentorUsername,
        "intern": internUsername,
        "hours": hours
    }
    return fetch(SERVER_ADDRESS + '/mentor/hoursApproval',
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
