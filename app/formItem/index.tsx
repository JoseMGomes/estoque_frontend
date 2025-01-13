import React, { useState } from "react";
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
import { postCreateItemAsync } from "@/services/estoqueServices";

const FormItem: React.FC = () => {
  const formRef: any = React.useRef(null);
  const [rawText, setRawText] = useState("");
  const [image, setImage] = useState<any>(null);
  const [quantity, setQuantity] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productValue, setProductValue] = useState<string>("");

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

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
        setImage(() => `data:image/jpg;base64,${imageResponse?.assets[0]?.base64}`);
      }
    } catch (err) {
      return err;
    }
  };

  const validateField = (field: string, message: string) => {
    if (!field.trim()) {
      Alert.alert("Erro", message);
      return false;
    }
    return true;
  };

  const validateForm = () => {
    if (!image) {
      Alert.alert("Erro", "A imagem do produto é obrigatória.");
      return false;
    }

    if (
      !validateField(productName, "O nome do produto é obrigatório.") ||
      !validateField(
        productDescription,
        "A descrição do produto é obrigatória."
      ) ||
      !validateField(productValue, "O valor do produto é obrigatório.") ||
      !validateField(quantity, "A quantidade é obrigatória.")
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (data: any) => {
    if (validateForm()) {
      try {
        const newItem = {
          name: productName,
          description: productDescription,
          price: parseFloat(productValue.replaceAll(".","").replace("R$", "").replace(",",".").trim()),
          quantity: parseInt(quantity),
          image,
        };
        console.log(newItem)
      
        const response = await postCreateItemAsync(newItem);

        if (response) {
          Alert.alert("Sucesso", "Produto criado com sucesso!");
        } else {
          Alert.alert("Erro", "Falha ao criar produto.");
        }
      } catch (err) {
        Alert.alert("Erro", "Ocorreu um erro ao tentar enviar os dados.");
      }
    }
  };

  return (
    <Container>
      <Content>
        <Header title="Estoque" />
        <ScrollView>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Label>Imagem:</Label>
            <TouchableOpacity onPress={selectPicture}>
              <Image
                source={
                  !image
                    ? require("../../assets/images/productImage.jpg")
                    : {
                        uri: image,
                      }
                }
              />
            </TouchableOpacity>

            <Label>Nome do produto:</Label>
            <Input
              name="name"
              placeholder="Nome:"
              value={productName}
              onChangeText={(text) => setProductName(text)}
            />

            <Label>Descrição:</Label>
            <Input
              name="description"
              placeholder="Descrição do produto:"
              value={productDescription}
              onChangeText={(text) => setProductDescription(text)}
            />

            <Label>Valor:</Label>
            <InputMask
              setRawText={setRawText}
              rawText={rawText}
              initial=""
              type="money"
              name="price"
              keyboardType="numeric"
              label="MONEY"
              placeholder="Digite o valor do produto:"
              value={productValue}
              onChangeText={(text) => setProductValue(text)}
            />

            <Label>Quantidade:</Label>
            <Input
              name="quantity"
              placeholder="Quantidade do produto:"
              value={quantity}
              onChangeText={(text) => setQuantity(text)}
              keyboardType="numeric"
            />

            <Choose>
              <Button
                onPress={() => formRef.current?.submitForm()}
                title="Enviar"
              />
            </Choose>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default FormItem;
