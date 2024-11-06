import { createSlice } from "@reduxjs/toolkit";
import { getMarsRoverPhotos } from "../../thunks/mars/marsThunk";

const marsSlice = createSlice({
    name:'mars',
    initialState:{
        photos:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getMarsRoverPhotos.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getMarsRoverPhotos.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getMarsRoverPhotos.rejected, (state, action)=>{
            state.loading= false;
            state.error = action.error.message;
        })
    }

});

export default marsSlice.reducer;