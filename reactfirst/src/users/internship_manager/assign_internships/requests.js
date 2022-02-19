import fetchMock from "fetch-mock";
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

// const companies = [{value: 1, label: "פייסבוק"}, { value: 2, label: "גוגל" },{ value: 2, label: "אפל" } ]
const companies = ["פייסבוק", "גוגל" ,"אפל"]
fetchMock.mock(SERVER_ADDRESS+'/getCompanies', companies);

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

const students = [
    { name: "חי מתתיהו"},
    { name: "מאי וייץ"},
    { name: "יובל מור"},
    { name: "ליל ג'ו" },
    { name: "ארנון סטורם"},
    { name: "טל בשן" },
];
// fetchMock.mock(SERVER_ADDRESS+'/getCompanies', companies);
fetchMock.mock(SERVER_ADDRESS+'/company', students);


