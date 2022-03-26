import {SERVER_ADDRESS} from '../../../config'
import fetchMock from "fetch-mock";

export const getWorkingHours = (username, setHours) => fetch(SERVER_ADDRESS+`/intern/getHours/${username}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
            setHours(data);
    })))

const data = JSON.stringify([{date: "1/2/2022", startTime: "09:00", endTime: "11:00"}, {date: "2/2/2022", startTime: "08:00", endTime: "13:00"}]);
fetchMock.mock(SERVER_ADDRESS+`/intern/getHours/user`, data);

const bla = [
    { name: "חי מתתיהו"},
    { name: "מאי וייץ"},
    { name: "יובל מור"},
    { name: "ליל ג'ו" },
    { name: "ארנון סטורם"},
    { name: "טל בשן" },
];
// fetchMock.mock(SERVER_ADDRESS+'/getCompanies', companies);
fetchMock.mock(SERVER_ADDRESS+'/company', bla);

// todo: interns/hoursReport, fix first request

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

fetchMock.mock(SERVER_ADDRESS+'/intern/hoursReport', {status: 200});