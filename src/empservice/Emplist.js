import axios from 'axios'

const API_GET_EMP_URL = 'http://localhost:8080/getEmp';
const API_ADD_EMP_URL = 'http://localhost:8080/addEmp';

export const listEmps = () => axios.get(API_GET_EMP_URL);

export const createEmp = (employee) => axios.post(API_ADD_EMP_URL, employee);

