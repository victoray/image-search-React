import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 2532c1003d3af416af2a33edf3d22eaa4871da19793266601cae9f6b01350cac'
    },

});