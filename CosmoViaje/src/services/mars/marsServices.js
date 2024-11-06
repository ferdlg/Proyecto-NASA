import axios from "axios";

export class MarsServices{
    constructor(){
        this.baseUrlMarsRoverPhotos = import.meta.env.VITE_MARS_ROVER_PHOTOS_BASE_URL;
        console.log('Mars Rovers Photos Base url:', this.baseUrlMarsRoverPhotos);
    }

    async getMarsRoverPhotos (){
        try{
            const page = Math.floor((Math.random(1,25)));
            const apiKey = import.meta.env.VITE_NASA_API_KEY;
            
            const suns = [2000, 3000, 4000, 4102]
            const multimediaRequest = suns.map((sun)=>{
                axios.get(`${this.baseUrlMarsRoverPhotos}`, {
                    sol:sun,
                    api_key:apiKey,
                    page: page
                });
            }) 

            const responses = await Promise.all(multimediaRequest);
            const photosBySun = responses.map((responses, index)=>({
                sol: suns[index],
                photos: responses.data.photos
            }));
            console.log(photosBySun);
            return photosBySun;
        }catch(e){
            console.error('Error get mars rover photos:', e);
            throw new Error (`Status Code ${e}`);
        }
    }
}