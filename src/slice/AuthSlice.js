import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Login } from "../api/login";

export const AuthAsyncThunk = createAsyncThunk(
    'auth/Login',
    //authData => {userName:'amir' , passWord:'123456}
    async(authData)=>{
        const data = await Login(authData.userName , authData.passWord);
        return data
    }//1:Pendding 2:fullfilled 3:rejected
)

const initialState ={

}

export const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(AuthAsyncThunk.pending,()=>{
            
        })
        builder.addCase(AuthAsyncThunk.fulfilled,()=>{

        })
        builder.addCase(AuthAsyncThunk.rejected,()=>{

        })
    }
})

export const {} =AuthSlice.actions
export default AuthSlice.reducer