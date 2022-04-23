import {SERVER_ADDRESS} from "../../../config";
import fetchMock from "fetch-mock";

export const sendFile = (username, report) => {

    return fetch(SERVER_ADDRESS+`/intern/uploadReport/${username}`,
        {
            method: 'POST',
            mode: "cors",
            body: report
        }).then(response => console.log(response));
}

fetchMock.mock(SERVER_ADDRESS + '/intern/uploadReport', {status: 200});