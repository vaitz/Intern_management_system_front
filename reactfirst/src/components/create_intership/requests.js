import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const createInternship = (companyName,internshipName,internshipDescription,demands,mentor,notes) => {
    const response = axios.post('http://localhost:3000/createInternship',
        {
            "company name": companyName,
            "internship name": internshipName,
            "internship description": internshipDescription,
            "demands": demands,
            "mentor": mentor,
            "notes": notes ? notes : ""
        }).then(response => console.log("post",response))
}

const mock = new MockAdapter(axios);
mock.onPost('http://localhost:3000/admin/createInternship').reply(200, true);