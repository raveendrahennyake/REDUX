import { createAsyncThunk, createEntityAdapter,createSlice } from "@reduxjs/toolkit";

const postState=createEntityAdapter(
    {selectId:(element)=>element.id}
    
    )

const initialState=postState.getInitialState({
    loading:'idle',
    error:null 

}    )

 export const getPost=createAsyncThunk('getPost',async ()=>{
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/posts')
        const data=await response.json()
        if(data){
            return data;
        }else {
            return {obj:"data is not found "}
        }
        
    } catch (error) {
        return  {error:"url is not valid"};
    }
})

const PostSlice=createSlice({
    name:'postslice',
    initialState, 
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(getPost.pending,(state)=>{
            state.loading="data is pending";
          
        })

        builder.addCase(getPost.fulfilled,(state,action)=>{
            state.loading="data load complete"
            postState.addMany(state,action.payload)
          
        })
        builder.addCase(getPost.rejected,(state)=>{
            state.loading="data loading failed"
            state.error="Some error"
           
        })
    }
    
})

export const SelectAllpost=(store)=>store.post

export const {
    selectAll,
    selectById,
    selectEntities,
    selectTotal,
    selectIds 
} =postState.getSelectors((store)=>store.post);

export default PostSlice.reducer;


