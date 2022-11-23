import axios from "axios";
let apikey = "api_key=78701b4e0dfb52f1194f8f82670bab14";

export const bringSeries = () => {
    try {
        return axios.get(`http://api.themoviedb.org/3/movie/popular?${apikey}&language=en-US&page=1`);
    } catch (error) {
        console.log(error);
    }
};