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

const data = JSON.stringify([
    {id: 1, date: "1/2/2022", startTime: "09:00", endTime: "11:00", approved: true, totalTime: "02:00"},
    {id:2, date: "2/2/2022", startTime: "08:00", endTime: "13:00" , approved: false, totalTime: "05:00"},
    {id:3, date: "3/2/2022", startTime: "09:00", endTime: "17:00" , approved: false, totalTime:'08:00' },
    {id:4, date: "4/2/2022", startTime: "08:00", endTime: "12:00" , approved: true, totalTime: "04:00"},
    {id:5, date: "5/2/2022", startTime: "11:00", endTime: "13:00" , approved: false, totalTime: "02:00"}
]);
fetchMock.mock(SERVER_ADDRESS+`/intern/getHours/user`, data);

const bla = [
    { name: "חי מתתיהו"},
    { name: "מאי וייץ"},
    { name: "יובל מור"},
    { name: "ליל ג'ו" },
    { name: "ארנון סטורם"},
    { name: "טל בשן" },
];

fetchMock.mock(SERVER_ADDRESS+'/company', bla);

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