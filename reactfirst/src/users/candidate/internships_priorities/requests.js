import fetchMock from 'fetch-mock';
import {SERVER_ADDRESS} from '../../../config'

fetchMock.mock(SERVER_ADDRESS+'/prioritiesAmount/program1', JSON.stringify(3));
fetchMock.mock(SERVER_ADDRESS+'/candidate/internshipsPriorities', 200);

export const getPrioritiesAmount = (program, setPrioritiesAmount) => {
    fetch(SERVER_ADDRESS+'/prioritiesAmount/'+program,
        {
            method: 'Get',
            mode: "cors",
        }).then(response => response.json().then(data => {
            console.log(data);
            setPrioritiesAmount(data);
        }
    ).catch(error => {
        console.log("error");
    }));
}

export const getInternships = (program, setOptions) => {
    fetch(SERVER_ADDRESS+'/internships/'+program,
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
            response.json().then(data => {
                var tempData = [""];
                tempData.push(...data.map((obj)=>{return obj.companyName + "- " + obj.internshipName}));
                setOptions(tempData);
            });
        }).catch(error => {
            console.log("error");
        });
}
        

export function sendInternshipsToServer(username, prioritiesArr){
    // prioritiesArr- suppose to be array of string order by the priorities of the user
    const data = {
        "username": username,
        "priorities": prioritiesArr,
    };
    fetch(SERVER_ADDRESS+'/candidate/internshipsPriorities',
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => {console.log(data)}));

}