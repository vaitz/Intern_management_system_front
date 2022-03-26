import fetchMock from 'fetch-mock';
import {SERVER_ADDRESS} from '../../../config'

fetchMock.mock(SERVER_ADDRESS+'/prioritiesAmount/123', JSON.stringify(3));
fetchMock.mock(SERVER_ADDRESS+'/candidate/internshipsPriorities', 200);

// export const getPrioritiesAmount = (program, setPrioritiesAmount) => {
//     fetch(SERVER_ADDRESS+'/prioritiesAmount/'+program,
//         {
//             method: 'Get',
//             mode: "cors",
//         }).then(response => response.json().then(data => {
//             console.log(data);
//             setPrioritiesAmount(data);
//         }
//     ).catch(error => {
//         console.log("error");
//     }));
// }

export const getInternships = (program, setOptions) => {
    fetch(SERVER_ADDRESS+'/internships/'+program,
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
            response.json().then(data => {
                const tempData = data.map((internship, index) => ({value: index, object: internship, label: internship.companyName + "- " + internship.internshipName }))
                setOptions(tempData);
            });
        }).catch(error => {
            console.log("error");
        });
}
        

export function sendInternshipsToServer(username, priorities){
    const data = {
        "username": username,
        "priorities": priorities,
    };
    fetch(SERVER_ADDRESS+'/candidate/internshipsPriorities',
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => {console.log(data)}));

}