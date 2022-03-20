import {SERVER_ADDRESS} from '../../../config'

export const getStudentsRequest = (setStudents) => fetch(SERVER_ADDRESS+'/mentor/getInterns',
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response => response.json().then(data => {
        setStudents(data);
    })))
