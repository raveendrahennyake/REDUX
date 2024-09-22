import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // Define the initial state, e.g., an empty array


const cardSlicing = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItemToCard: {
            reducer:(state, action) => {
                const id=action.payload.id
                const tempobj=state.find((element)=>element.id===id)
                if (tempobj){
                    tempobj.count+=1
                }else {
                      state.push(action.payload);
                }
          
        },prepare:(price,ram,cpu)=>{{
            return {
                 payload:{
                            
                             price:price,
                             ram:ram,
                            cpu:cpu,
                             count:1
            }

            }
           
        }

        }
        }
    }
});

export const selectcard=(MainStore)=>MainStore.card;

export const { addItemToCard } = cardSlicing.actions;

export default cardSlicing.reducer;
