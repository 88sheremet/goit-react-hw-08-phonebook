import axios from 'axios';

export const userPublicAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userPrivateAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

userPrivateAPI.interceptors.request.use(authInterceptor);

export const userAPI = {
  async register(formData) {
    const { data } = await userPublicAPI.post('/users/signup', formData);
    return await data;
  },
  async login(formData) {
    const { data } = await userPublicAPI.post('/users/login', formData);
    return await data;
  },
  async userCurrentData() {
    const { data } = await userPrivateAPI.get(`/users/current`);
    return await data;
  },
};
