import { configureStore } from "@reduxjs/toolkit";
import exoplanetsReducer from "../slices/exoPlanets/exoplanetsSlice";
import marsReducer from "../slices/mars/marsSlice";

const store = configureStore({
    reducer:{
        exoplanets: exoplanetsReducer,
        mars: marsReducer
    }
})
export default store; 
