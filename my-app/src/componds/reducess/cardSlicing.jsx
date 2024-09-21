import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // Define the initial state, e.g., an empty array

const cardSlicing = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItemToCard: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addItemToCard } = cardSlicing.actions;

export default cardSlicing.reducer;
