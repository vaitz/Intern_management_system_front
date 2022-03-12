import {SERVER_ADDRESS} from '../../../config'

export const logoutRequest  = () => {
    fetch(SERVER_ADDRESS+ `/users/logout`,
        {
            method: 'Get',
            mode: "cors",
        }
    ).then(res => console.log("here"))
}
