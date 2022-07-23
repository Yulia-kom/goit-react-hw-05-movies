import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const API_KEY = "1f2a1c1df9b08116674e58b4b84e3ffa";

export const getTrending = () => {
    return axios.get("/trending/get-trending");

};



// https://api.themoviedb.org/3/movie/550?api_key=1f2a1c1df9b08116674e58b4b84e3ffa