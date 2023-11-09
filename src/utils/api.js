import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5300',
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": true,
        "Access-Control-Allow-Origin": "*"
    }
});

export default api;
