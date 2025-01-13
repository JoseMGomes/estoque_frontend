import React, { useState, useEffect, useRef } from "react";
import { Container, Content, Image, Choose } from "./styles";
import { Form } from "@unform/mobile";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import Header from "@/components/header";
import InputMask from "@/components/mask";
import { colors } from "@/constants/colors";
import { Label } from "@/components/label/styles";
import Input from "@/components/input";
import Button from "@/components/button";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { postCreateItemAsync, putUpdateItemAsync } from "@/services/estoqueServices";
import { ItemProps } from "@/types/itemEstoque";

const FormItem: React.FC = () => {
  const formatPrice = (price: string): string => {
    const numericPrice = price.replace("R$", "").replace(",", ".");
    const formattedPrice = (parseFloat(numericPrice)).toFixed(2);
    
    console.log(price)
    return formattedPrice;
  };


  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const description = searchParams.get('description');
  const quantity = searchParams.get('quantity');
  const price = searchParams.get('price');
  const image = searchParams.get('image');

  const formRef = useRef<any>(null);

  const [productImage, setProductImage] = useState<string>(image || "");
  const [rawText, setRawText] = useState<string>()

  useEffect(() => {
    if (id) {
        formRef.current?.setFieldValue("name", name);
        formRef.current?.setFieldValue("price", price?.replace(".",","))
        formRef.current?.setFieldValue("description", description)
        formRef.current?.setFieldValue("quantity", quantity)
      setProductImage(image || '');
    }
  }, [id, name, description, quantity, price, image]);



  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão para acessar a galeria");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!pickerResult.canceled) {
      return pickerResult;
    }
  };

  const selectPicture = async () => {
    try {
      const imageResponse: any = await pickImage();
      if (imageResponse) {
        setProductImage(() => `data:image/jpg;base64,${imageResponse?.assets[0]?.base64}`);
      }
    } catch (err) {
      return err;
    } 
  };

  const handleSubmit = async (data) => {
    data.price=rawText
    data.quantity=parseInt(data.quantity)
    if(productImage){
      data.image = productImage
      }
      console.log(productImage)
    if (id) {
      const updatedData = await putUpdateItemAsync(data, id);
        console.log(data)
      if (updatedData) {
        Alert.alert("Sucesso", "Produto atualizado com sucesso!");
        router.push("/listEstoque");
      }
    } else {
      const createdData = await postCreateItemAsync(data);
      if (createdData) {
        Alert.alert("Sucesso", "Produto criado com sucesso!");
        router.push("/listEstoque");
      }
    }
  };


  return (
    <Container>
      <Content>
        <Header title={id ? "Editar Produto" : "Novo Produto"} /> 
        <ScrollView>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Label>Imagem:</Label>
            <TouchableOpacity onPress={selectPicture}>
              <Image
                source={productImage ? { uri: productImage } : require("../../assets/images/productImage.jpg")}
              />
            </TouchableOpacity>

            <Label>Nome do produto:</Label>
            <Input
              name="name"
              placeholder="Nome:"
              
            />

            <Label>Descrição:</Label>
            <Input
              name="description"
              placeholder="Descrição do produto:"
            />

            <Label>Valor:</Label>
            <InputMask
              setRawText={setRawText}
              rawText= {rawText}
              type="money"
              name="price"
              keyboardType="numeric"
              label="MONEY"
              placeholder="Digite o valor do produto:"
            />

            <Label>Quantidade:</Label>
            <Input
              name="quantity"
              placeholder="Quantidade do produto:"
              keyboardType="numeric"
            />

            <Choose>
              <Button
                onPress={() => formRef.current?.submitForm()}
                title={id ? "Salvar Alterações" : "Cadastrar Produto"} 
              />
            </Choose>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default FormItem;
