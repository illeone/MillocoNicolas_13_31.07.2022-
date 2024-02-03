export const extraReducerLoginBuilder = (builder, asyncThunk) =>{
    builder.addCase(asyncThunk.pending,(state) => {
        state.isLoading = true
    }).addCase(asyncThunk.fulfilled,(state, action) =>{
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.message = ""
        state.user = action.payload
    }).addCase(asyncThunk.rejected, (state, action) =>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.user = null          
    })
    return builder;
}

export const extraReducerLogoutBuilder = (builder,asyncThunk) => {
    builder.addCase(asyncThunk.fulfilled, (state) => {
        state.user = null
        state.userInfos = null
        state.isSuccess = false
    })
    return builder;
}

export const extraReducerUserGetInfoBuilder = (builder,asyncThunk) =>{
    
    builder.addCase(asyncThunk.pending,(state) => {
        state.isLoading = true
    }).addCase(asyncThunk.fulfilled,(state, action) =>{
        state.isLoading = false
        state.userInfos = action.payload
    }).addCase(asyncThunk.rejected,(state, action) =>{
        state.isLoading = false
        state.userInfos = action.payload
    });
    return builder;
}

export const extraReducerUserPutInfoBuilder = (builder,asyncThunk) =>{
    
    builder.addCase(asyncThunk.pending,(state) => {
        state.isLoading = true
    }).addCase(asyncThunk.fulfilled,(state, action) =>{
        state.isLoading = false
        state.userInfos = action.payload
    }).addCase(asyncThunk.rejected,(state, action) =>{
        state.isLoading = false
        state.userInfos = action.payload
    })
    return builder;
}


export const extraReducerRegisterBuilder = (builder,asyncThunk) =>{
    builder.addCase(asyncThunk.pending,(state) => {
        state.isLoading = true
    }).addCase(asyncThunk.fulfilled,(state, action) =>{
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.message = ""
        state.userInfos = action.payload
        // state.user = action.payload
    }).addCase(asyncThunk.rejected, (state, action) =>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.userInfos = action.payload
        // state.user = null          
    });

    return builder;
}


const extraReducersService = {extraReducerLoginBuilder, extraReducerLogoutBuilder, extraReducerRegisterBuilder, extraReducerUserGetInfoBuilder, extraReducerUserPutInfoBuilder}

export default extraReducersService;