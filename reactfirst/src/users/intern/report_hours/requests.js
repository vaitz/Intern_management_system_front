import {SERVER_ADDRESS} from '../../../config'

export const getWorkingHours = (userName, setHours) => fetch(SERVER_ADDRESS+`/internHours`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
            setHours(data);
    })))
