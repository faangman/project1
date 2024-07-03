import axios from "axios";
import {Inputs} from "../components/Login/Login";

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
    },
    getUserById (id: string) {
        return axiosInstance.get(`/profile/${id}`)
    },
    login (data: Inputs) {
        return axiosInstance.post<login>('/auth/login', data)
    },
    logout () {
        return axiosInstance.delete<logout>('/auth/login')
    }
}

type login = {
    resultCode: number
    messages: String[],
    data: {
        userId: number
    }
}

type logout = {
    resultCode: number
    messages: String[],
    data: {}
}