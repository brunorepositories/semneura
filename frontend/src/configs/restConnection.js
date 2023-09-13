import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:3333'

const RestConnection = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'}
})
.interceptors.request.use(
  (config) => {
    // Você pode adicionar cabeçalhos ou fazer outras manipulações aqui
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)
.interceptors.response.use(
  (response) => {
    // Você pode manipular a resposta aqui, se necessário
    return response;
  },
  (error) => {
    // Você pode manipular erros de resposta aqui, se necessário
    return Promise.reject(error);
  }
);

export default RestConnection