import {SERVER_ADDRESS} from "../../../config";
import fetchMock from "fetch-mock";

export const sendFile = (username, report, intern) => {
    return fetch(SERVER_ADDRESS+`/mentor/${username}/uploadReport/${intern.username}`,
        {
            method: 'POST',
            mode: "cors",
            body: report
        }).then(response => console.log(response));
}

fetchMock.mock(SERVER_ADDRESS + '/mentor/user/uploadReport/hay', {status: 200});