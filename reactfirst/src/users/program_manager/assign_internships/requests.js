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


export const getCompanyData = (setCompanyData, companyName, internshipName) => {
    fetch(SERVER_ADDRESS+`/company/${companyName}/${internshipName}/nominees`,
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




export const assignIntern = (company, student) => {
    const data = {
        "companyName": company.companyName,
        "internshipName": company.internshipName,
        "studentName": student.username
    }
    fetch(SERVER_ADDRESS+`/assignIntern`,
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => console.log(response));}

