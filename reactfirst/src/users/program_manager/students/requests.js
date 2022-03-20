import {SERVER_ADDRESS} from '../../../config'

export const getStudentsRequest = (setStudents, programId) => fetch(SERVER_ADDRESS+`/students/${programId}`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setStudents(data);
    })))

