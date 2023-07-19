import axios from 'axios'

const $axios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

$axios.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config
})

$axios.interceptors.response.use(
    request => {
        return Promise.resolve(request?.data || {})
    },
    error => {
        if((error?.response?.status === 401 || error?.status === 401) && (!error?.config?.url?.includes('login'))) {
            window.location.href = '/login';
            return Promise.reject('Unauthorized')
        } else {
            return Promise.reject(error?.response?.data || 'An error occurred')
        }
    }
)

export { $axios };