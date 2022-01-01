import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
const data = { response: true };
mock.onGet('http://localhost:3000/programManagers').reply(200, data);