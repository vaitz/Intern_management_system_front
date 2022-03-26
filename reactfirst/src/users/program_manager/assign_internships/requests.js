import {SERVER_ADDRESS} from '../../../config'

export const getCompanies = ({setCompanies, programId, formatCompanies, setSelectedCompany}) => {

    fetch(SERVER_ADDRESS+`/internships/${programId}`,
        {
            method: 'Get',
            mode: "cors",
        }).then(response => response.json().then(data => {
            const formattedCompanies = formatCompanies(data);
            setCompanies(formattedCompanies);
            setSelectedCompany(formattedCompanies[0]);
        }
    ).catch(error => {
        console.log("error");
    }));
}


export const getCompanyData = (setCompanyData, companyName, internshipName, program) => {
    fetch(SERVER_ADDRESS+`/programManager/${program}/${companyName}/${internshipName}/nominees`,
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
        "username": student.username
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

