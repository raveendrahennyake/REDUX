import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../reducess/PostSlice";


const store=configureStore({
    reducer:{
        post:PostSlice
        
       
        
        



    }

})

export default store;