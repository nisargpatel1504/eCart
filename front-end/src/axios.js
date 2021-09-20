import axios from "axios";

const instance = axios.create({
    baseURL : 'https://ecartbackend.herokuapp.com/'
});

export default instance ; 