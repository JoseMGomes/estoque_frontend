
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RegisterUser } from "@/types/registerUser";
import { LoginUser } from "@/types/loginUser";
import api from "@/factory/api";
import { AxiosError, AxiosResponse } from "axios";
import { TokenResponse } from "@/types/userResponsSing";


export interface ResponseRegisterUser extends AxiosResponse {
  data: {
    user: RegisterUser;
  };
}

export interface ResponseSignInProps extends AxiosResponse {
  data: TokenResponse;
}

export interface ResponseMeProps extends AxiosResponse {
  data: {
    user: RegisterUser;
  };
}


export async function postRegisterUserAsync(user: RegisterUser) {
  try {
    const { data }: ResponseRegisterUser = await api.post("/auth/signup", user);
    return data;
  } catch (err: any) {
    Alert.alert("Ops, aconteceu um erro", err.response?.error || "Erro desconhecido");
    return false;
  }
}


export async function postSignInUserAsync(user: LoginUser) {
  try {
    const { data }: ResponseSignInProps = await api.post("/auth/login", user);
    if (data) {
      await AsyncStorage.setItem("userStorageAsync", JSON.stringify(data.user));
      await AsyncStorage.setItem("TokenStorageAsync", data.token);
    }
    return data;
  } catch (err: any) {
    console.log(err.response?.data);
    return false;
  }
}


export async function getAuthenticatedUserAsync() {
  try {
    const { data }: ResponseMeProps = await api.get("/auth/me");
    return data;
  } catch (err: any) {
    Alert.alert("Ops, aconteceu um erro", err.response?.error || "Erro desconhecido");
    return false;
  }
}
