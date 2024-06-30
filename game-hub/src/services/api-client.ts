import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fd6ce6c65ff04415b11cc9a63e795d7f'
    }
})