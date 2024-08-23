import reduce  from "./reducers/number"; 
import {createStore}from "redux";


const store=createStore(reduce);

export default store;

