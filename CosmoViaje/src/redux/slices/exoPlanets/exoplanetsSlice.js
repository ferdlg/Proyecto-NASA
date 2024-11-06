import { createSlice } from "@reduxjs/toolkit";
import { getExoplanets, getExoplanetsMultimedia } from "../../thunks/exoplanets/exoPlanetsThunk";

const exoplanetsSlice = createSlice({

    name:'exoplanets',
    initialState: {
        exoplanets:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getExoplanets.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getExoplanets.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getExoplanets.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(getExoplanetsMultimedia.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getExoplanetsMultimedia.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getExoplanetsMultimedia.rejected, (state, action)=>
        {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default exoplanetsSlice.reducer;