import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../reducess/PostSlice";
import NumberSlice from "../reducess/NumberSlice";


const store=configureStore({
    reducer:{
        post:PostSlice,
        number:NumberSlice
        
       
        
        



    }

})

export default store;