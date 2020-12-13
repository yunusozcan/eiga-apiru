import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import config from '../configs/config.json';

const cache = setupCache({
    maxAge: 15 * 60 * 1000,
    exclude: {
        query: false,
    }
})

const apiClient = axios.create({
    adapter: cache.adapter,
    baseURL: config.apiUrl,
    params: {
        apikey: config.apikey
    },

});

export { apiClient };
