import axios, { AxiosResponse } from 'axios';
import {environment} from '../environments/environment';

const API_HOST = environment.apiHost;

let api = axios.create({
    baseURL: API_HOST
});

export const register = async (userRequest: RegisterUserRequest): Promise<AxiosResponse<RegisterUserResponse>> => api.post(`/users/auth`, {...userRequest});
export const login = async (userRequest: RegisterUserRequest): Promise<AxiosResponse<RegisterUserResponse>> => api.post(`/users/auth/login`, {...userRequest});