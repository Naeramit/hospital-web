import axios from './axios';


export const createNewPassword = (payload) => axios.patch(`/user/newpassword`, payload);