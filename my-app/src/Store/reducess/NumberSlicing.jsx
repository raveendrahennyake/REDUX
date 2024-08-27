import { createSlice } from "@reduxjs/toolkit";

const initialState={
    number:10,
    computer:[]
}
//recursion
const reducerGen=(key,operator)=>{
    if(operator==='+'){
         return (state,action)=>{
        state[key]+=action.payload
    }
    }else if (operator==='-') {
        return (state,action)=>{
            state[key]-=action.payload
        }
    }
}

 export const NumberSlicingSelector=(Store)=>Store.numberSlicing

const NumberSlicing=createSlice({
    name:'number',
    initialState,
    reducers:{
        increment:reducerGen('number','+'),
        decrement:reducerGen('number','-')
    }

})

//destruction Slicing

 export  const {increment,decrement}=NumberSlicing.actions;

export default NumberSlicing.reducer;

