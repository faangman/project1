import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "71023deb-9880-4d9d-b603-169dc1376949"
    }
})

export const API = {
    getUsers () {
        return axiosInstance.get('/users')
    }
}