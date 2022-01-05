import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const getProgramManagers = (setOptions) => axios.get('http://localhost:3000/programManagers')
    .then((response) => {
        setOptions(response.data);
    });

export const createProgram = (internshipName, year, semester, programManager, hoursRequired, department) => {
    axios.post('http://localhost:3000/admin/openProgram',
        {
            "program name": internshipName,
            "year": year, "semester": semester,
            "program manager": programManager,
            "hours required": hoursRequired,
            "department": department
        }).then(response => console.log("post",response))
}

const mock = new MockAdapter(axios);
const data = [{value: 1, label: "מאי וייץ"}, { value: 2, label: "חי מתתיהו" }] ;
mock.onGet('http://localhost:3000/programManagers').reply(200, data);
mock.onPost('http://localhost:3000/admin/openProgram').reply(200, true);