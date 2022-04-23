import {SERVER_ADDRESS} from "../../../config";

export const sendFile = (username, report, intern) => {
    return fetch(SERVER_ADDRESS+`/mentor/${username}/uploadReport/${intern.username}`,
        {
            method: 'POST',
            mode: "cors",
            body: report
        }).then(response => console.log(response));
}
