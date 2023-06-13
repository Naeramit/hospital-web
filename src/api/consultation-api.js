import axios from './axios';

const headers = {
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
}

export const getHistory = (consultationId) => axios.get(`/consultation/${consultationId}/history`, headers);

export const updateHistory  = ( consultationId, payload) =>  axios.patch(`/consultation/${consultationId}/history`, payload, headers)

export const getDiagnosis = (consultationId) => axios.get(`/consultation/${consultationId}/diagnosis`, headers)

export const addDiagnosis = (consultationId, payload) => axios.post(`/consultation/${consultationId}/diagnosis`, payload, headers)

export const updateDiagnosis = (consultationId, diagnosisId, payload) => axios.patch(`/consultation/${consultationId}/diagnosis/${diagnosisId}`,payload, headers)

export const deleteDiagnosis = (consultationId, diagnosisId) => axios.delete(`/consultation/${consultationId}/diagnosis/${diagnosisId}`,headers)