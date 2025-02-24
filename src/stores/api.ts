/* eslint-disable no-undef */
import axios, { AxiosError } from "axios";
import { parseErrorFromAxios } from "../utils/helper";

const endPoint = import.meta.env.VITE_API_BACKEND_URL;

const apiConfig = (flag = false) => {
    if (localStorage.getItem("accessToken")) {
        return {
            headers: {
                Authorization: `bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": flag ? "multipart/form-data" : "application/json",
            },
            method: "PUT,DELETE,POST,GET,OPTION",
        };
    }
    return { withCredentials: false };
};

interface Params {
    pageSize?: number;
    [key: string]: string | number | boolean | object | undefined;
}

export const getApi = async (url: string, params: Params = {}) => {
    try {
        // this is the temporary solution for getting all merchants in dropdowns.
        // will improves this in future.

        // if (url.includes("getall-merchant") && !params.pageSize) {
        //   params.pageSize = 1000;
        // }
        const response = await axios.get(`${endPoint}${url}`, {
            params: params,
            ...apiConfig(),
        });
        return {
            data: response.data,
            error: null,
        };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data && err.response.data.error?.name) {
            // localStorage.clear();
        }
        return { data: null, error: parseErrorFromAxios(err as AxiosError<{ error?: { message?: string }; message?: string }>) };
    }
};

export const postApi = async (url: string, apiData: Record<string, unknown>, flag: boolean) => {
    try {
        const response = await axios.post(
            `${endPoint}${url}`,
            apiData,
            apiConfig(flag)
        );
        return {
            data: response.data,
            error: null,
        };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data && err.response.data.error?.name) {
            // localStorage.clear();
        }
        return { data: null, error: parseErrorFromAxios(err as AxiosError<{ error?: { message?: string }; message?: string }>) };
    }
};

export const putApi = async (url: string, apiData: Record<string, unknown>, flag: boolean) => {
    try {
        const response = await axios.put(
            `${endPoint}${url}`,
            apiData,
            apiConfig(flag)
        );
        return {
            data: response.data,
            error: null,
        };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data && err.response.data.error?.name) {
            // localStorage.clear();
        }
        return { data: null, error: parseErrorFromAxios(err as AxiosError<{ error?: { message?: string }; message?: string }>) };
    }
};

export const patchApi = async (url: string, apiData: Record<string, unknown>, flag: boolean) => {
    try {
        const response = await axios.patch(
            `${endPoint}${url}`,
            apiData,
            apiConfig(flag)
        );
        return {
            data: response.data,
            error: null,
        };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data && err.response.data.error?.name) {
            // localStorage.clear();
        }
        return { data: null, error: parseErrorFromAxios(err as AxiosError<{ error?: { message?: string }; message?: string }>) };
    }
};

export const putApiNoHeader = async (url: string, apiData: Record<string, unknown>) => {
    try {
        if (localStorage.getItem("accessToken")) {
            const response = await axios.put(`${endPoint}${url}`, apiData, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            return {
                data: response.data,
                error: null,
            };
        } else {
            return {
                data: null,
                error: {
                    error: null,
                    message: "No access token available",
                },
            };
        }
    } catch (err) {
        return { data: null, error: parseErrorFromAxios(err as AxiosError<{ error?: { message?: string }; message?: string }>) };
    }
};

export const deleteApi = async (url: string,) => {
    try {
        const response = await axios.delete(`${endPoint}${url}`, apiConfig());
        return {
            data: response.data,
            error: null,
        };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data && err.response.data.error?.name) {
            // localStorage.clear();
        }
        return { data: null, error: parseErrorFromAxios(err as AxiosError<{ error?: { message?: string }; message?: string }>) };
    }
};

export const deleteApiWithData = async (url: string, apiData: Record<string, unknown>) => {
    try {
        const response = await axios.delete(`${endPoint}${url}`, {
            data: apiData,
            ...apiConfig(),
        });
        return {
            data: response.data,
            error: null,
        };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data && err.response.data.error?.name) {
            // localStorage.clear();
        }
        return { data: null, error: parseErrorFromAxios(err as AxiosError<{ error?: { message?: string }; message?: string }>) };
    }
};

export const getApiForGeneratePaymentUrl = async (
    url: string,
    params = {},
    header = {}
) => {
    try {
        // this is the temporary solution for getting all merchants in dropdowns.
        // will improves this in future.
        const response = await axios.get(`${endPoint}${url}`, {
            params: params,
            headers: header,
            // ...apiConfig(),
        });
        return {
            data: response.data,
            error: null,
        };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data && err.response.data.error?.name) {
            // localStorage.clear();
        }
        return { data: null, error: parseErrorFromAxios(err as AxiosError<{ error?: { message?: string }; message?: string }>) };
    }
};

export const postApiForWithdrawCreation = async (
    url: string,
    data = {},
    header = {}
) => {
    try {
        // this is the temporary solution for getting all merchants in dropdowns.
        // will improves this in future.
        const response = await axios.post(`${endPoint}${url}`, data, {
            headers: header,
            // ...apiConfig(),
        });
        return {
            data: response.data,
            error: null,
        };
    } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data && err.response.data.error?.name) {
            // localStorage.clear();
        }
        return { data: null, error: parseErrorFromAxios(err as AxiosError<{ error?: { message?: string }; message?: string }>) };
    }
};
