import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../../config'

export const createInternship = (company,internshipName,internshipDescription,demands, program) => {
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
        }).then(response => console.log(response));
}

fetchMock.mock(SERVER_ADDRESS+'/programManager/createInternship', "success");
