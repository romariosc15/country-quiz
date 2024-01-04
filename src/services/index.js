import axios from 'axios'

export const getCountries = () => {
    return axios.get('https://restcountries.com/v3.1/independent?status=true&fields=name,capital')
}