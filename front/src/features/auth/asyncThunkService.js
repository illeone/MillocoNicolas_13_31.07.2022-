import { createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService";


export const login = createAsyncThunk("auth/login", async(user,thunkAPI) => {
    try {
        return await authService.login(user)
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
}) 

export const logout = createAsyncThunk("auth/logout",() => {
    authService.logout()
}) 

export const getUserInfos = createAsyncThunk("auth/getUserInfos", async(user,thunkAPI) => {
    try {
        return await authService.getUserInfos(user)
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
}) 

export const putUserInfos = createAsyncThunk("auth/putUserInfos", async(data,thunkAPI) => {
    try {
        return await authService.putUserInfos(data)
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
}) 

export const register = createAsyncThunk("auth/signup", async(user,thunkAPI) => {
    try {
        return await authService.register(user)
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
}) 


const asyncThunkService = { login, logout,register, putUserInfos, getUserInfos};
export default asyncThunkService;