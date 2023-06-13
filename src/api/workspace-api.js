import axios from './axios';

export const getAllTask = (workspaceId) => axios.get(`/workspace/${workspaceId}/task`,{
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
});
