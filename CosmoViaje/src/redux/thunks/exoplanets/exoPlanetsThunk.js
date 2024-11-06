import { createAsyncThunk } from "@reduxjs/toolkit";
import {ExoplanetsService} from "../../../services/exoPlanets/exoPlanetsServices";

const exoplanetsService =  new ExoplanetsService();
export const getExoplanets = createAsyncThunk(
    'exoplanets/getExoplanets',
    async ()=>{
        const data = await exoplanetsService.getConfirmedExoplanets();
        return data;
    }
);

export const getExoplanetsMultimedia = createAsyncThunk(
    'exoplanets/getExoplanetsMultimedia',
    async ()=>{
        const data = await exoplanetsService.getExoplanetsMultimedia();
        return data;
    }
);

