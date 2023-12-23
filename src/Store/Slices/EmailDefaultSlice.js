import {createSlice} from '@reduxjs/toolkit'

const EmailDefaultSlice=createSlice({
    name:'emaildefault',
    initialState:{
        email:"",
    },
    reducers:{
        setEmail:(state,actions)=>{
            state.email=actions.payload
        }
    }
})
export const{setEmail} =EmailDefaultSlice.actions
export default EmailDefaultSlice.reducer