import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../../config'

export const getStudentsRequest = (setStudents, username) => fetch(SERVER_ADDRESS+`/mentor/getInterns/${username}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setStudents(data);
    })))

const students = [
    { first_name: "חי", last_name: "מתתיהו", email: "ff@ggg.com", internship:"אלביט פיתוח פרונט" },
    { first_name: "יובל", last_name: "מור", email: "ff@ggg.com", internship:"אלביט פיתוח פרונט" },
    { first_name: "ליל", last_name: "ג'ו", email: "ff@ggg.com", internship:"אלביט פיתוח פרונט" },
    { first_name: "ארנון", last_name: "סטורם", email: "ff@ggg.com", internship:"אלביט פיתוח פרונט" },
    { first_name: "טל", last_name: "בשן", email: "ff@ggg.com", internship:"אלביט פיתוח פרונט" }
];

fetchMock.mock(SERVER_ADDRESS+`/mentor/getInterns/user` , students);