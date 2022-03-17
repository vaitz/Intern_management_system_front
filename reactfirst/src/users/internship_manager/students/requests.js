import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../../config'

export const getStudentsRequest = (setStudents, programId) => fetch(SERVER_ADDRESS+`/students/${programId}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setStudents(data);
    })))

const students = [
    { firstName: "חי", lastName: "מתתיהו", status: "מועמד", internship: "", hours: "-" },
    { firstName: "יובל", lastName: "מור", status: "מועמד מתקדם", internship: "", hours: "-" },
    { firstName: "ליל", lastName: "ג'ו", status: "מתמחה", internship: "גוגל-התמחות 1", hours: 5 },
    { firstName: "ארנון", lastName: "סטורם", status: "מתמחה", internship: "גוגל-התמחות 2", hours: 8 },
    { firstName: "טל", lastName: "בשן", status: "מועמד", internship: "", hours: "-" }
];

fetchMock.mock(SERVER_ADDRESS+`/students/1`, students);