import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {SERVER_ADDRESS} from '../../../config'

export const getWorkingHours = (userName, setHours) => fetch(SERVER_ADDRESS+`/internHours`,
    {
        method: 'Get',
        mode: "cors",
    })
    .then((response) => {
        console.log("here")
        setHours(response.data);
    });


// const mock = new MockAdapter(axios);
// const data = [{date: "1/2/2022", start: "09:00", end: "11:00"}, {date: "2/2/2022", start: "08:00", end: "13:00"}] ;
// mock.onGet(SERVER_ADDRESS+'/internHours').reply(200, data);
// mock.onPost(SERVER_ADDRESS+'/admin/openProgram').reply(200, true);