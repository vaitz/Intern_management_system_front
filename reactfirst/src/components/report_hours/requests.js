import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const getWorkingHours = (userName, setHours) => axios.get(`http://localhost:3000/internHours`)
    .then((response) => {
        console.log("here")
        setHours(response.data);
    });

export const createProgram = (internshipName, year, semester, programManager, hoursRequired, department) => {
    const response = axios.post('http://localhost:3000/admin/openProgram',
        {
            "program name": internshipName,
            "year": year, "semester": semester,
            "program manager": programManager,
            "hours required": hoursRequired,
            "department": department
        }).then(response => console.log("post",response))
}

const mock = new MockAdapter(axios);
const data = [{date: "1/2/2022", start: "09:00", end: "11:00"}, {date: "2/2/2022", start: "08:00", end: "13:00"}] ;
mock.onGet('http://localhost:3000/internHours').reply(200, data);
mock.onPost('http://localhost:3000/admin/openProgram').reply(200, true);