import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService"

//get userLogin from localStorage
const userLogin = JSON.parse(localStorage.getItem("userLogin"))

const initialState = {
    user: userLogin ? userLogin : null,
    isLoading:false,
    isSuccess:false,
    isError:false,
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
        console.log(data);
        return await authService.putUserInfos(data)
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
}) 

export const authSlice = createSlice({
    name: "auth",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(login.pending,(state) => {
            state.isLoading = true
        }).addCase(login.fulfilled,(state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message = ""
            state.user = action.payload
        }).addCase(login.rejected, (state, action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.user = null          
        })

        .addCase(logout.fulfilled, (state) => {
            state.user = null
            state.userInfos = null
            state.isSuccess = false
        })

        .addCase(getUserInfos.pending,(state) => {
            state.isLoading = true
        }).addCase(getUserInfos.fulfilled,(state, action) =>{
            state.isLoading = false
            state.userInfos = action.payload
        }).addCase(getUserInfos.rejected,(state, action) =>{
            state.isLoading = false
            state.userInfos = action.payload
        })

        .addCase(putUserInfos.pending,(state) => {
            state.isLoading = true
        }).addCase(putUserInfos.fulfilled,(state, action) =>{
            state.isLoading = false
            state.userInfos = action.payload
        }).addCase(putUserInfos.rejected,(state, action) =>{
            state.isLoading = false
            state.userInfos = action.payload
        })
    }
})


export default authSlice.reducer
