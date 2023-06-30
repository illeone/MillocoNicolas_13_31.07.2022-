import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService"

//get userLogin from localStorage
const userLogin = JSON.parse(localStorage.getItem("userLogin"))

const initialState = {
    user: userLogin ? userLogin : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
    userInfos: null,
}

export const login = createAsyncThunk("auth/login", async(user,thunkAPI) => {
    try {
        return await authService.login(user)
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
}) 



export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})

export default authSlice.reducer
