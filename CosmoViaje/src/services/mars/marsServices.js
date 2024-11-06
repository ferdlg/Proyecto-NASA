import axios from "axios";

export class MarsServices{
    constructor(){
        this.baseUrlMarsRoverPhotos = import.meta.env.VITE_MARS_ROVER_PHOTOS_BASE_URL;
        console.log('Mars Rovers Photos Base url:', this.baseUrlMarsRoverPhotos);
    }

    async getMarsRoverPhotos (){
        try{
            const page = 1;
            const apiKey = import.meta.env.VITE_NASA_API_KEY;
            
            const suns = [2000, 3000, 4000, 4102]
            const multimediaRequest = suns.map((sun)=>{
                return axios.get(`${this.baseUrlMarsRoverPhotos}?api_key=${apiKey}&sol=${sun}&page=${page}`);
            });

            const responses = await Promise.all(multimediaRequest);

            const photosBySun = responses.map((responses, index)=>({
                sol: suns[index],
                photos: responses.data.photos
            }));
            return photosBySun;
        }catch(e){
            console.error('Error get mars rover photos:', e);
            throw new Error (`Status Code ${e}`);
        }
    }
}