import {SERVER_ADDRESS} from '../../../config'

export const getWorkingHours = (username, setHours) => fetch(SERVER_ADDRESS+`/intern/getHours/${username}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
            setHours(data);
    })))


export const reportHours = (username, hours) => {
    const data = {
        "username": username,
        "hours": hours
    }
    fetch(SERVER_ADDRESS+`/intern/hoursReport`,
    {
        method: 'POST',
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => console.log(response));}