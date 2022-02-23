import {SERVER_ADDRESS} from '../../../config'
import fetchMock from "fetch-mock";

export const getWorkingHours = (userName, setHours) => fetch(SERVER_ADDRESS+`/internHours`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
            setHours(data);
    })))

const data = JSON.stringify([{date: "1/2/2022", start: "09:00", end: "11:00"}, {date: "2/2/2022", start: "08:00", end: "13:00"}]);
fetchMock.mock(SERVER_ADDRESS+'/internHours', data);

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