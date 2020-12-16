import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

export const getToys = (params) => axios.get(`${baseUrl}/toys`, { params: params })