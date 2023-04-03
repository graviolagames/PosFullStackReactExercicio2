import axios from 'axios';

const API_KEY = '3a6dacbb2c787551536f07cfc546eba1'
const BASE_URL = 'https://api.themoviedb.org/3/'
const withBaseUrl = (path)=>`${BASE_URL}${path}?api_key = ${API_KEY}`

export class MovieService{
    
    static getMovies(){
        return axios(withBaseUrl(`movie/popular`))
    }

    static getMovieDetail(id){
        return axios(withBaseUrl(`movie/${id}`))
    }

}