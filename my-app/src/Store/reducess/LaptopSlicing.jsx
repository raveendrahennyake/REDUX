import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:10,
    brand:[]
}

const LapTopSlicing=createSlice({
    name:'laptop',
    initialState:initialState,
    reducers:{
        addLaptop:(state,action)=>{
            count:state.count+action.payload
            
        },
        removeLaptop:(state,action)=>{
            count:state.count-action.payload

        }

    }
})

export default LapTopSlicing.reducer

export const {addLaptop,removeLaptop}=LapTopSlicing.actions;