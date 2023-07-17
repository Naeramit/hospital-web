import axios from './axios';


export const getHistory = (consultationId) => axios.get(`/consultation/${consultationId}/history`);

export const updateHistory  = ( consultationId, payload) =>  axios.patch(`/consultation/${consultationId}/history`, payload)

export const getDiagnosis = (consultationId) => axios.get(`/consultation/${consultationId}/diagnosis`)

export const addDiagnosis = (consultationId, payload) => axios.post(`/consultation/${consultationId}/diagnosis`, payload)

export const updateDiagnosis = (consultationId, diagnosisId, payload) => axios.patch(`/consultation/${consultationId}/diagnosis/${diagnosisId}`,payload)

export const deleteDiagnosis = (consultationId, diagnosisId) => axios.delete(`/consultation/${consultationId}/diagnosis/${diagnosisId}`)

export const getAllDrugOrder = (consultationId) => axios.get(`/consultation/${consultationId}/drugorder`)

export const addDrugOrder = (consultationId, payload) => axios.post(`/consultation/${consultationId}/drugorder`, payload)


export const deleteDrugOrder = (consultationId, drugorderId) => axios.delete(`/consultation/${consultationId}/drugorder/${drugorderId}`)



// router.patch('/:consultationId/drugorder/:drugorderId', userController.updateDrugOrder)
