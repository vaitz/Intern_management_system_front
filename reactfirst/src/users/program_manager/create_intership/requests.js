import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../../config'

export const createInternship = (setPopup,setError, company,internshipName,internshipDescription,demands, program) => {
    const data = {
        "company": company,
        "program": program,
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
            if (response.status === 200) setPopup(true);
            else if (response.status === 400) setError("שם ההתמחות קיים כבר במערכת, יש לבחור שם אחר");
            else if (response.status === 404) setError("החברה או התוכנית לא קיימים במערכת, נסו שוב");
            else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
        })
        .catch(error => {
            console.log(error);
        });
}

fetchMock.mock(SERVER_ADDRESS+'/programManager/createInternship', "success");
