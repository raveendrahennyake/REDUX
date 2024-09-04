import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState=[{
   
}

]



export const laptopSelectorSlicing=(store)=>store.lapTopSlicing
//chage function

// const LapTopSlicing=createSlice({
//     name:'laptop',
//     initialState:initialState,
//     reducers:{
//         addLaptop:(state,action)=>{
//             state.push(action.payload)
            
//         }
       
//     }
// })



const LapTopSlicing=createSlice({
    name:'laptop',
    initialState:initialState,
    reducers:{
        addLaptop:{
            reducer:(state,action)=>{
            state.push(action.payload)
            
        },prepare:(price,cpu,gen,hdd,ram)=>{
            return {
                payload:{
                    id:nanoid,
                    price,
                    spec:{
                         cpu,
                        gen,
                        hdd,
                        ram

                    }

                }
            }
        }
        }
       
    }
})




export default LapTopSlicing.reducer

export const {addLaptop}=LapTopSlicing.actions;