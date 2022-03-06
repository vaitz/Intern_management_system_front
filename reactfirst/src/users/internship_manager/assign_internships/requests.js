import {SERVER_ADDRESS} from '../../../config'

export const getCompanies = (setCompanies) => {
    fetch(SERVER_ADDRESS+'/getCompanies',
        {
            method: 'Get',
            mode: "cors",
        }).then(response => response.json().then(data => {
            console.log(data);
            setCompanies(data);
        }
    ).catch(error => {
        console.log("error");
    }));
}


export const getCompanyData = (setCompanyData) => {
    fetch(SERVER_ADDRESS+`/company`,
        {
            method: 'Get',
            mode: "cors",
        }).then(response => response.json().then(data => {
            setCompanyData(data);
        }
    ).catch(error => {
        console.log("getCompany" ,"error");
    }));
}



