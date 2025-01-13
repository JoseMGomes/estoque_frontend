import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";
import { ItemProps } from "@/types/itemEstoque";
import { RegisterItemProps } from "@/types/resgisterItem";
import api from "@/factory/api";

export interface RegisterItemPropsResponse extends AxiosResponse {
  data: ItemProps;
}

export interface ResponseSignInProps extends AxiosResponse {
  data: ItemProps[];
}


export async function getAllItemsAsync() {
  try {
    const { data }: ResponseSignInProps = await api.get("/products/");
    return data;
  } catch (err: any) {
    Alert.alert("Ops, aconteceu um erro", err.response?.error || "Erro desconhecido");
    return false;
  }
}



export async function patchUpdateItemQuantityAsync(
  stockId: string,
  body: { quantity: number; updateQuantity: "add" | "remove" }
  
) {
  try {
    console.log(body)
    console.log(stockId)
    const { data }: RegisterItemPropsResponse = await api.patch(
      `/products/${stockId}/quantity`,
      body
    );
    return data;
  } catch (err: any) {
    Alert.alert("Ops, aconteceu um erro", err.response?.error);
    return false;
  }
}


export async function deleteItemAsync(stockId: string) {
  try {
    const { data }: RegisterItemPropsResponse = await api.delete(
      `/products/${stockId}`
    );
    return data;
  } catch (err: any) {
    Alert.alert("Ops, aconteceu um erro", err.response?.error || "Erro desconhecido");
    return false;
  }
}


export async function postCreateItemAsync(product: RegisterItemProps) {
  try {
    console.log(product)
    const { data }: RegisterItemPropsResponse = await api.post(
      "/products/",
      product
    );
    return data;
  } catch (err: any) {
    Alert.alert("Ops, aconteceu um erro", err.response?.error || "Erro desconhecido");
    return false;
  }
}


export async function putUpdateItemAsync(
  product: RegisterItemProps,
  stockId: string
) {
  try {
    const { data }: RegisterItemPropsResponse = await api.put(
      `/products/${stockId}`,
      product
    );
    return data;
  } catch (err: any) {
    Alert.alert("Ops, aconteceu um erro", err.response?.error || "Erro desconhecido");
    return false;
  }
}
