import axios from 'axios';

// ① użyj process.env – CRA wstrzykuje zmienne z prefiksem REACT_APP_
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
});

export default api;
