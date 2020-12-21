import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'
const withHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

export const getToys = (params) => axios.get(`${baseUrl}/toys`, { params: params })


export const logIn = (formData) => axios.post(`${baseUrl}/login`, formData)

export const getUserProfile = () => axios.get(`${baseUrl}/profile`, withHeaders()) 