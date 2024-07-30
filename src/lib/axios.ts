import axios from 'axios'

// export const API_KEY = "2a2b6ad0"
export const API_KEY = "e17511f4"

export const api = axios.create({
    baseURL: 'http://www.omdbapi.com/'
})