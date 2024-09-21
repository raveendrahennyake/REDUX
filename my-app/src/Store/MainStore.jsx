import { configureStore } from "@reduxjs/toolkit";
import cardSlicing from "../componds/reducess/cardSlicing";

const MainStore = configureStore({
    reducer: { // Correct this part
        card: cardSlicing // The key here should match the name used in `createSlice`
    }
});

export default MainStore;
