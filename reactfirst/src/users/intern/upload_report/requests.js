import {SERVER_ADDRESS} from "../../../config";

export const sendFile = (username, report) => {

    return fetch(SERVER_ADDRESS+` /intern/uploadReport/${username}`,
        {
            method: 'POST',
            mode: "cors",
            body: report
        }).then(response => console.log(response));
}
