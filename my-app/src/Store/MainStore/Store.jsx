import {configureStore} from '@reduxjs/toolkit';
import NumberSlicing from '../reducess/NumberSlicing';
import LaptopSlicing from '../reducess/LaptopSlicing';
//Create Store
const Store=configureStore({
    reducer:{
        numberSlicing:NumberSlicing,
        lapTopSlicing:LaptopSlicing
    }
})
export default Store;



