import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../../config'

export const createInternship = (companyName,internshipName,internshipDescription,demands,mentor,notes) => {
    const data = {
        "company name": companyName,
        "internship name": internshipName,
        "internship description": internshipDescription,
        "demands": demands,
        "mentor": mentor,
        "notes": notes ? notes : ""
    }
    const response = fetch(SERVER_ADDRESS+'/createInternship',
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => console.log(data)));
}

fetchMock.mock(SERVER_ADDRESS+'/createInternship', "success");
