import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:5190/api/customers';

export const listCustomers = () =>  axios.get(REST_API_BASE_URL);