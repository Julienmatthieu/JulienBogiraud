import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
    key: '9a6a44b26be34264a2a402519cfb0097'
}})