import { createSlice } from "@reduxjs/toolkit";


const initialState=[];

const cardSlice=createSlice({
    name:'card',
    initialState,
    reducers:{

        addItemToCard:(state,action)=>{
            state.push(action.payload)
        }
    }

    
})
export default cardSlice.reducer

export const {addItemToCard}= cardSlice.actions