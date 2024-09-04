import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
   
}

]



export const laptopSelectorSlicing=(store)=>store.lapTopSlicing
//chage function

const LapTopSlicing=createSlice({
    name:'laptop',
    initialState:initialState,
    reducers:{
        addLaptop:(state,action)=>{
            state.push(action.payload)
            
        }
       
    }
})

export default LapTopSlicing.reducer

export const {addLaptop}=LapTopSlicing.actions;