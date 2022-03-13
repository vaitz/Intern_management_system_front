import {SERVER_ADDRESS} from '../../../config'

export const createInternship = (program,internshipName,internshipDescription,demands) => {
    const data = {
        "program": program,
        "internshipName": internshipName,
        "about": internshipDescription,
        "requirements": demands,
    }
    const response = fetch(SERVER_ADDRESS+'/companyRep/createInternship',
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => console.log(response));
}

export const getPrograms = (setPrograms) => {
    fetch(SERVER_ADDRESS+'/activePrograms',
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
        response.json().then(data => {
            let tempData = [""];
            tempData.push(...data);
            setPrograms(tempData);
        });
    }).catch(error => {
        console.log("error");
    });
}