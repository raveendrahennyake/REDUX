import { configureStore } from "@reduxjs/toolkit";
import cardSlicing from "../componds/reducess/cardSlicing";
import LapTopSlicing from "../componds/reducess/LapTopSlicing";

const MainStore = configureStore({
    reducer: { // Correct this part
        card: cardSlicing, // The key here should match the name used in `createSlice`
        laptop:LapTopSlicing
    }
});

export default MainStore;
