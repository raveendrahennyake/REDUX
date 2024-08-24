import { createSlice } from "@reduxjs/toolkit";

const initialState={
    number:10,
}
const NumberSlicing=createSlice({
    name:'number',
    initialState,
    reducers:{
        increment:(state,action)=>{
             state.number += action.payload;
            
        },
        decrement:(state,action)=>{
             state.number -= action.payload

        }
         
    }

})

//destruction Slicing

 export  const {increment,decrement}=NumberSlicing.actions;

export default NumberSlicing.reducer;

