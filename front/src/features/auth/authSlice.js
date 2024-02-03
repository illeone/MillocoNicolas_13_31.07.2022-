import {createSlice} from "@reduxjs/toolkit";
import extraReducersService from "./extraReducers";
import asyncThunkService  from './asyncThunkService';

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

export const authSlice = createSlice({
    name: "auth",
    initialState,

    extraReducers: (builder) => {
        extraReducersService.extraReducerLoginBuilder(builder,asyncThunkService.login);
        extraReducersService.extraReducerLogoutBuilder(builder,asyncThunkService.logout);
        extraReducersService.extraReducerUserGetInfoBuilder(builder,asyncThunkService.getUserInfos);
        extraReducersService.extraReducerUserPutInfoBuilder(builder,asyncThunkService.putUserInfos);
        extraReducersService.extraReducerRegisterBuilder(builder,asyncThunkService.register);
    }
})

export default authSlice.reducer
