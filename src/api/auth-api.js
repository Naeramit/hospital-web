import axios from './axios';

export const register = input => axios.post('/auth/registry', input);
export const login = input => axios.post('/auth/login', input);
export const getUser = () => axios.get('/auth/getUser');