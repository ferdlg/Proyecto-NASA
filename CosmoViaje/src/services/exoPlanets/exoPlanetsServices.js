import axios from "axios";
import exoPlanetData from '../../data/exoplanetsData.json'

export const fetchExoplanetsData = async()=>{
    const response = await axios.get(exoPlanetData);
    return response.data;
}

export class ExoplanetsService{
    constructor(){
        this.baseUrlScientificData = import.meta.env.VITE_EXOPLANETS_BASE_URL_SCIENTIFIC_DATA;
        console.log('Scientific Data Base url:', this.baseUrlScientificData);

        this.baseUrlMultimediaData =  import.meta.env.VITE_EXOPLANETS_BASE_URL_MULTIMEDIA_DATA;
        console.log('Multimedia Data Base url:', this.baseUrlScientificData);
    }

    async getConfirmedExoplanets(){
        try{
            const apiKey = import.meta.env.VITE_NASA_API_KEY;
            const scientificData = await axios.get(`${this.baseUrlScientificData}TAP/sync?query=SELECT+objectid,+pl_name,+hostid,+hostname,+disc_year,+discoverymethod,+pl_orbper+FROM+pscomppars+WHERE+disc_year+>+2020&format=json`,{
                params:{
                    api_key: apiKey
                }
            });
            return scientificData.data;
        } catch(e){
        console.error('Error fetching confirmed exoplanets:', e);
        throw new Error(`Status Code ${e}`);
        };
    }
    async getExoplanetsMultimedia(){
        try{
            const multimediaData = await axios.get(`${this.baseUrlMultimediaData}search`,{
                params:{
                    q:'exoplanet',
                    media_type:'image'
                }
            });
            return multimediaData;
        }catch(e){
            console.error('Error fetching confirmed exoplanets:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
}