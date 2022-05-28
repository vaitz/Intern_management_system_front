import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../../config'

export const createInternship = (setPopup,setError, company,internshipName,internshipDescription,demands,program,mentor) => {
    const data = {
        "company": company,
        "program": program,
        "mentor": mentor,
        "internshipName": internshipName,
        "about": internshipDescription,
        "requirements": demands
    }
    const response = fetch(SERVER_ADDRESS+'/programManager/createInternship',
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
            console.log(response);
            if (response.status === 201) setPopup(true);
            else if (response.status === 400) setError("שם ההתמחות קיים כבר במערכת, יש לבחור שם אחר");
            else if (response.status === 404) setError("החברה או התוכנית לא קיימים במערכת, נסו שוב");
            else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
        })
        .catch(error => {
            console.log(error);
        });
}

export const getMentors = (setMentors,company) => {
    fetch(SERVER_ADDRESS+`/mentors/${company}`,
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
        response.json().then(data => {
            console.log(data);
            let tempData = [{username: "", name: ""}];
            let names = data.map((mentor) => ({username: mentor.username , name: (mentor.firstName + " " + mentor.lastName)}));
            tempData.push(...names);
            setMentors(tempData);
        });
    }).catch(error => {
        console.log(error);
    });
}

export const getCompanies = (setCompanies) => {
    fetch(SERVER_ADDRESS+`/companies`,
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
        response.json().then(data => {
            let tempData = [""];
            tempData.push(...data);
            setCompanies(tempData);
        });
    }).catch(error => {
        console.log(error);
    });
}


fetchMock.mock(SERVER_ADDRESS+'/programManager/createInternship', "success");
fetchMock.mock(SERVER_ADDRESS+'/companies', ['elbit','meta']);
fetchMock.mock(SERVER_ADDRESS+'/mentors/elbit', [{username: "maor", firstName: "maor", lastName:"cohen"},{username: "maor", firstName: "yuval", lastName:"cohen"}]);
