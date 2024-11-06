import { createAsyncThunk } from "@reduxjs/toolkit";
import {MarsServices} from "../../../services/mars/marsServices";

const marsServices = new MarsServices();
export const getMarsRoverPhotos = createAsyncThunk(
    'mars/getMarsRoverPhotos',
    async ()=>{
        const data = await marsServices.getMarsRoverPhotos();
        return data;
    }
);