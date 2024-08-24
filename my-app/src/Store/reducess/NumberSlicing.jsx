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
        },
        decrement:(state,action)=>{
            number:state.number-action.payload

        }
         
    }

})

//destruction Slicing

 export  const {increment,decrement}=NumberSlicing.actions;

export default NumberSlicing.reducer;

