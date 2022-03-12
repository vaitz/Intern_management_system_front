import fetchMock from "fetch-mock";
import {SERVER_ADDRESS} from '../../../config'

export const createInternship = (program,internshipName,internshipDescription,demands,mentor) => {
    const data = {
        "program": program,
        "internshipName": internshipName,
        "about": internshipDescription,
        "requirements": demands,
        "mentor": mentor
    }
    const response = fetch(SERVER_ADDRESS+'/createInternship',
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data)
        }).then(response => console.log(response));
}

fetchMock.mock(SERVER_ADDRESS+'/createInternship', "success");
