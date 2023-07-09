import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

httpClient.defaults.headers.post['Content-Type'] = 'application/json';

export default httpClient;
