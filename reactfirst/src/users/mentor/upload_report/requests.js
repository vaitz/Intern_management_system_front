import {SERVER_ADDRESS} from "../../../config";

export const sendFile = (username, report, intern) => {
    return fetch(SERVER_ADDRESS+`/mentor/${username}/uploadReport/${intern}`,
        {
            method: 'POST',
            mode: "cors",
            body: report
        }).then(response => console.log(response));
}
