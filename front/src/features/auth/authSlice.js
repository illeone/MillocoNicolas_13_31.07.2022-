import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

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


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})

export default authSlice.reducer
