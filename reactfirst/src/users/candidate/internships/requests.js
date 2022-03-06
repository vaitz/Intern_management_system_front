import {SERVER_ADDRESS} from '../../../config'

export const getInternships = (program, setInternships) => {
    fetch(SERVER_ADDRESS+'/internships/'+program,
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
            response.json().then(data => {
                setInternships(data);
            });
        }).catch(error => {
            console.log("error");
        });
}