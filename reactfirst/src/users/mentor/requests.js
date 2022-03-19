import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../config'

export const getStudentsRequest = (setStudents) => fetch(SERVER_ADDRESS+'/mentor/getInterns',
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setStudents(data);
    })))

const students = [
    { firstName: "חי", lastName: "מתתיהו", internship: "אפל - התמחות 1", hours: 2 },
    { firstName: "יובל", lastName: "מור", internship: "אפל - התמחות 2", hours: 3 },
    { firstName: "ליל", lastName: "ג'ו", internship: "גוגל-התמחות 1", hours: 5 },
    { firstName: "ארנון", lastName: "סטורם", internship: "גוגל-התמחות 2", hours: 8 },
    { firstName: "טל", lastName: "בשן", internship: "אפל - התמחות 1", hours: 4 }
];

fetchMock.mock(SERVER_ADDRESS+'/mentor/getInterns', students);