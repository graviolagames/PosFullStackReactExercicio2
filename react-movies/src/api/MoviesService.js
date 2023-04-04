import axios from 'axios';

const API_KEY = '56b4c9013f14cf2c157724cb24d70eb8'
const BASE_URL = 'https://api.themoviedb.org/3/'
const withBaseUrl = (path)=>`${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService{
    
    static getMovies(){
        return axios(withBaseUrl(`movie/popular`))
    }

    static getMovieDetail(id){
        return axios(withBaseUrl(`movie/${id}`))
    }

}