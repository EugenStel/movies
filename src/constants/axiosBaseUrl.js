import axios from "axios"

export const axiosBaseURL = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})