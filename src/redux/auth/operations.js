import axios from 'axios';

export const userPublicAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const userPrivateAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});


export const signUp = async (body)=>{
const {data} =await  userPublicAPI.post('/users/signup', body)
return data
}