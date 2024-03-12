import axios from "axios";
import { CorsRequest } from "cors";

const request = axios.create({
    baseURL: 'https://api.mangadex.org/'
})

export default request;