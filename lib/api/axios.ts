import axios, { 
  AxiosInstance, 
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';
import { getAuthToken } from '../utils/auth';

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = getAuthToken();
    
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// Add HTTP method convenience functions
const apiWithMethods = {
  ...api,
  get: api.get,
  post: api.post,
  put: api.put,
  delete: api.delete,
  patch: api.patch,
  
  // These are your service functions
  getAllCities: async () => {
    const response = await api.get('/cities');
    return response.data;
  },
  getCityDetail: async (slug: string) => {
    const response = await api.get(`/cities/${slug}`);
    return response.data;
  },
  getChatMessages: async (slug: string, params: any) => {
    const response = await api.get(`/messages/city/${slug}/messages`, { params });
    return response.data;
  }
  // Add more service functions as needed
};

export default apiWithMethods;
