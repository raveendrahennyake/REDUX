import { createSlice } from "@reduxjs/toolkit";

const initialState={
    number:0,
}
const NumberSlicing=createSlice({
    name:'number',
    initialState,
    reducers:{
        increment:(state,action)=>{
            number:state.number+action.payload
        }

    }


})