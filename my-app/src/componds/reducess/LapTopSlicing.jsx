import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
    price:15000000,
    cpu:"i3",
    ram:"4GB",
},
{
    price:25000000,
    cpu:"i4",
    ram:"8GB",
},
{
    price:35000000,
    cpu:"i5",
    ram:"12GB",
},{
    price:45000000,
    cpu:"i6",
    ram:"16GB",
}]

 
const LapTopSlicing=createSlice({
    name:'laptop',
    initialState,
    reducers:{
        addlaptop:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const selectLaptop = (MainStore) => MainStore.laptop;

export const {addlaptop}=LapTopSlicing.actions;

export default LapTopSlicing.reducer;
