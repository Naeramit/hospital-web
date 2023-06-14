import axios from './axios';

export const getAllTask = (workspaceId) => axios.get(`/workspace/${workspaceId}/task`);
