import {SERVER_ADDRESS} from "../../../config";
import fetchMock from "fetch-mock";

export const sendFile = (username, report) => {
    const data = {
        "username": username,
        "report": report
    }

    console.log(data);

    return fetch(SERVER_ADDRESS+`/intern/uploadReport`,
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

fetchMock.mock(SERVER_ADDRESS + '/intern/uploadReport', {status: 200});