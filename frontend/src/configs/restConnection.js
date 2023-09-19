import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:3333'

const RestConnection = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'}
})

export default RestConnection