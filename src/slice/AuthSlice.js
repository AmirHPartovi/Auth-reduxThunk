import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const AuthAsyncThunk = createAsyncThunk(
    'auth/Login',
    //authData => {userName:'amir' , passWord:'123456}
    ()=>{}
)

const initialState ={

}

export const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{},
    extraReducers:()=>{

    }
})

export const {} =AuthSlice.actions
export default AuthSlice.reducer