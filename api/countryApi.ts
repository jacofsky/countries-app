import axios from "axios";

const countryApi = axios.create({
    baseURL: 'https://restcountries.com/v2'
})

export default countryApi