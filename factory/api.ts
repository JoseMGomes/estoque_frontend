import axios from "axios";
import baseURL from "@/config/baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";


const API = () => {
  axios.defaults.headers.common["Accept"] = "*/*";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  
  const api = axios.create({ baseURL: baseURL.URL });
  api.interceptors.request.use(async (config) => {
    const tokenString: String | null = await AsyncStorage.getItem("TokenStorageAsync");

    if (tokenString) {
      config.headers['Authorization'] = `Bearer ${tokenString}`;
    }
    
    return config;
  });
  return api; 
};

export default API();