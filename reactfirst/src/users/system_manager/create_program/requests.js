import fetchMock from "fetch-mock";


export const getProgramManagers = (setOptions) => fetch('http://localhost:3000/programManagers')
    .then((response) => {
        response.json().then(data => setOptions(data));
    })


export const createProgram = (internshipName, year, semester, programManager, hoursRequired, department) => {
    const data = {
        "program name": internshipName,
        "year": year,
        "semester": semester,
        "program manager": programManager,
        "hours required": hoursRequired,
        "department": department
    }
    const response = fetch('http://localhost:3000/admin/openProgram',
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => console.log(data)));
}

//create program
const data = [{value: 1, label: "מאי וייץ"}, { value: 2, label: "חי מתתיהו" }] ;
fetchMock.mock('http://localhost:3000/programManagers', data);
fetchMock.mock('http://localhost:3000/admin/openProgram', "success");
