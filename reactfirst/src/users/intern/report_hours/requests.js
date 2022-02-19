import {SERVER_ADDRESS} from '../../../config'
import fetchMock from "fetch-mock";

export const getWorkingHours = (userName, setHours) => fetch(SERVER_ADDRESS+`/internHours`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response) => {
        console.log(response.json())
        setHours(response.json());
    });

const data = [{date: "1/2/2022", start: "09:00", end: "11:00"}, {date: "2/2/2022", start: "08:00", end: "13:00"}] ;
fetchMock.mock(SERVER_ADDRESS+'/internHours', data);
// fetchMock.mock(SERVER_ADDRESS+'/admin/openProgram', true);