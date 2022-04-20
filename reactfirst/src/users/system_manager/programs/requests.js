import {SERVER_ADDRESS} from "../../../config";

export const getPrograms = (setPrograms) => {
    fetch(SERVER_ADDRESS+`/admin/programs`,
        {
            method: 'Get',
            mode: "cors",
        }).then(response => response.json().then(data => {
        const formattedData = data.map((program) => ({
            ...program,
            managerName: program.programManager_first_name + " " + program.programManager_last_name,
            activeProgram: program.active ? "כן" : "לא"
        }))
        setPrograms(formattedData);
        }
    ).catch(error => {
        console.log("error");
    }));
}