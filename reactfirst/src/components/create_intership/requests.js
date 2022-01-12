// import fetchMock from "fetch-mock";

export const createInternship = (companyName,internshipName,internshipDescription,demands,mentor,notes) => {
    const data = {
        "company name": companyName,
        "internship name": internshipName,
        "internship description": internshipDescription,
        "demands": demands,
        "mentor": mentor,
        "notes": notes ? notes : ""
    }
    const response = fetch('http://localhost:3000/createInternship',
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => console.log(data)));
}

// fetchMock.mock('http://localhost:3000/createInternship', "success");
