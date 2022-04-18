import {SERVER_ADDRESS} from "../../../config";
import fetchMock from "fetch-mock";

export const getInterns = (username, setInterns, formatInterns) => fetch(SERVER_ADDRESS+`/mentor/getInterns/${username}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setInterns(formatInterns(data));
    })));

const studentsNames1 = [
    { username: "hay", firstName: "חי", lastName: "מתתיהו", email: "someEmail@gmail.com", internship: "some internship" },
    { username: "hay", firstName: "חי", lastName: "מתתיהו", email: "someEmail@gmail.com", internship: "some internship" },
    { username: "hay", firstName: "חי", lastName: "מתתיהו", email: "someEmail@gmail.com", internship: "some internship" },
    { username: "hay", firstName: "חי", lastName: "מתתיהו", email: "someEmail@gmail.com", internship: "some internship" },
    { username: "hay", firstName: "חי", lastName: "מתתיהו", email: "someEmail@gmail.com", internship: "some internship" },
    { username: "hay", firstName: "חי", lastName: "מתתיהו", email: "someEmail@gmail.com", internship: "some internship" },
];

fetchMock.mock(SERVER_ADDRESS+'/mentor/getInterns/user', studentsNames1);

export const getWorkingHours = (username, setHours, formatHours) => fetch(SERVER_ADDRESS+`/intern/getHours/${username}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setHours(formatHours(data));
    })))

const data1 = JSON.stringify([
    {id: 1, date: "1/2/2022", startTime: "09:00", endTime: "11:00", approved: true},
    {id:2, date: "2/2/2022", startTime: "08:00", endTime: "13:00" , approved: false},
    {id:3, date: "3/2/2022", startTime: "09:00", endTime: "17:00" , approved: false},
    {id:4, date: "4/2/2022", startTime: "08:00", endTime: "12:00" , approved: true},
    {id:5, date: "5/2/2022", startTime: "11:00", endTime: "13:00" , approved: false}
]);

// fetchMock.mock(SERVER_ADDRESS+`/intern/getHours/hay`, data1);

export const approvedHours = (mentorUsername, internUsername, hours) => {
    const data = {
        "username": mentorUsername,
        "intern": internUsername,
        "hours": hours
    }
    const response = fetch(SERVER_ADDRESS+'/mentor/hoursApproval',
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => console.log(response));
}

fetchMock.mock(SERVER_ADDRESS+'/mentor/hoursApproval', "success");
