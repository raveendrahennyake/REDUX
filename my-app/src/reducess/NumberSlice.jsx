import { createAction, createAsyncThunk, createReducer, createSelector } from "@reduxjs/toolkit"

const initialState={
    number:0,
    User:[]
}

export const Increament=createAction('Increment',(name,age,city)=>{
    return {
        payload:{
            name,
            age,
            city,
        }
    }
});
export const Decrement=createAction('Decrement',(name,age,city)=>{
    return{
        payload:{
            name,
            age,
            city
        }
    }
});

export const getUser=createAsyncThunk('getpost-number',async ()=>{
    const Responce=await fetch ('https://jsonplaceholder.typicode.com/posts');
    const Data=await Responce.json();
    if(Array.isArray(Data)){
        return Data
    }else {
        return "data is not found"
    }
})


const NumberSlice=createReducer(initialState,(builder)=>{
    builder.addCase(Increament,(state,action)=>{
        state.number+=action.payload.age;
    })
    builder.addCase(Decrement,(state,action)=>{
        state.number-=action.payload.age
    })
    builder.addCase(getUser.fulfilled,(state,action)=>{

        state.User=action.payload;
    })

})


 export const numberSelect=(store)=>store.number.number;
 
export const NumberSelect=createSelector([numberSelect,],(num)=>{
    console.log("number is push");
    return num;

})


export default NumberSlice;