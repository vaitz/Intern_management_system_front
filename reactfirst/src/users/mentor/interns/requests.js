import {SERVER_ADDRESS} from '../../../config'

export const getStudentsRequest = (setStudents, username) => fetch(SERVER_ADDRESS+`/mentor/getInterns/${username}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setStudents(data);
    })))
