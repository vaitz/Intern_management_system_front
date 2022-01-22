import fetchMock from 'fetch-mock';
import {SERVER_ADDRESS} from '../../config'

fetchMock.mock(SERVER_ADDRESS+'/internships/program1', [{'companyName': 'companyA','internshipName':'internshipA', 'about':'bla', 'requirments':'askdnaskn'}]);
fetchMock.mock(SERVER_ADDRESS+'/candidate/internshipsPriorities', 200);


export const getInternships = (program, setOptions) => fetch(SERVER_ADDRESS+'/internships/'+program)
    .then((response) => {
        response.json().then(data => setOptions(data));
    })

export function sendInternshipsToServer(username, prioritiesArr){
    // prioritiesArr- suppose to be array of string order by the priorities of the user
    const data = {
        "username": username,
        "priorities": prioritiesArr,
    }
    const response = fetch(SERVER_ADDRESS+'/candidate/internshipsPriorities',
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => console.log(data)));

};