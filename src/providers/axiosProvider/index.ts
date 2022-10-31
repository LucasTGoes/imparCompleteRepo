import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const axiosProvider = axios.create({
    // httpsAgent : new https.Agent({ rejectUnauthorized: false,})
})



export const httpRequest = {
    get: <T>(url: string, config?: AxiosRequestConfig<T>) => {
        return axiosProvider.get<T>(url, config)
    },
    post: <T = never, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig<T>): Promise<R> => {
        return axiosProvider.post<T, R>(url, data, config)
    },
    put: <T = never, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig<T>): Promise<R> => {
        return axiosProvider.put<T, R>(url, data, config)
    },
    patch: <T>(url: string, data?: T, config?: AxiosRequestConfig<T>) => {
        return axiosProvider.patch<T>(url, data, config)
    },
    delete: <T>(url: string, config?: AxiosRequestConfig<T>) => {
        return axiosProvider.delete<T>(url, config)
    }
}