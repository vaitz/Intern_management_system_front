import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../../config'

export const getStudentsRequest = (setStudents, username) => fetch(SERVER_ADDRESS+`/mentor/getInterns${username}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setStudents(data);
    })))

const students = [
    { firstName: "חי", lastName: "מתתיהו", id: 1 },
    { firstName: "יובל", lastName: "מור", id: 2 },
    { firstName: "ליל", lastName: "ג'ו", id: 3 },
    { firstName: "ארנון", lastName: "סטורם", id: 4 },
    { firstName: "טל", lastName: "בשן", id: 5 }
];

fetchMock.mock(SERVER_ADDRESS+`/mentor/getInterns/user` , students);