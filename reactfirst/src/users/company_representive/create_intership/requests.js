import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../../config'

export const createInternship = (setPopup,setError,program,internshipName,internshipDescription,demands,username,mentor) => {
    const data = {
        "program": program,
        "internshipName": internshipName,
        "about": internshipDescription,
        "requirements": demands,
        "username": username,
        "mentor": mentor,
    }
    const response = fetch(SERVER_ADDRESS+'/companyRep/createInternship',
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.status === 201) setPopup(true);
            else if (response.status === 400) setError("שם ההתמחות קיים כבר במערכת, יש לבחור שם אחר");
            else if (response.status === 404) setError("החברה או התוכנית לא קיימים במערכת, נסו שוב");
            else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
        })
        .catch(error => {
            console.log(error);
        });
}

export const getPrograms = (setPrograms) => {
    fetch(SERVER_ADDRESS+'/activePrograms',
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
        response.json().then(data => {
            let tempData = [""];
            tempData.push(...data);
            setPrograms(tempData);
        });
    }).catch(error => {
        console.log(error);
    });
}


export const getMentors = (setMentors,username) => {
    fetch(SERVER_ADDRESS+`/mentorsByCompanyRep/${username}`,
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
        response.json().then(data => {
            let tempData = [{key: "", value:""}];
            let names = data.map((mentor) => ({
                key: mentor.username,
                value: mentor.firstName + " " + mentor.lastName
            }));
            tempData.push(...names);
            setMentors(tempData);
        });
    }).catch(error => {
        console.log(error);
    });
}

const data = ["123", "2", "3"]
const mentors = [
    { firstName: "חי", lastName: "מתתיהו", username: "ff" },
    { firstName: "יובל", lastName: "מור", username: "aa"},
];

fetchMock.mock(SERVER_ADDRESS+`/mentorsByCompanyRep/user` , mentors);
fetchMock.mock(SERVER_ADDRESS+'/companyRep/createInternship', "success");
fetchMock.mock(SERVER_ADDRESS+'/activePrograms', data);
