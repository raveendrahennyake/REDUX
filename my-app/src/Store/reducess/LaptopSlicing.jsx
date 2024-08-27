import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
    id:1,
    price:250000,
    spec:{
        cpu:'i3',
        gen:13,
        hdd:'1 TB',
        ram:'8 GB DDR 4'
    }
}

]

// export const laptopSelectorSlicing=(Store)=>Store.lapTopSlicing;

export const laptopSelectorSlicing=(store)=>store.lapTopSlicing

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