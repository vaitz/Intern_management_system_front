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
const companies = [{value: 1, label: "פייסבוק"}, { value: 2, label: "גוגל" },{ value: 2, label: "אפל" } ]
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
    { name: "חי מתתיהו", status: "אחרי ראיון", pass: "לא עבר"},
    { name: "מאי וייץ", status: "לפני ראיון", pass: ""},
    { name: "יובל מור", status: "לפני ראיון", pass: "" },
    { name: "ליל ג'ו", status: "אחרי ראיון", pass: "עבר" },
    { name: "ארנון סטורם", status: "אחרי ראיון", pass: "עבר" },
    { name: "טל בשן", status: "לפני ראיון", pass: "" },
];
// fetchMock.mock(SERVER_ADDRESS+'/getCompanies', companies);
fetchMock.mock(SERVER_ADDRESS+'/company', students);


