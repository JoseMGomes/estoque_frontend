import React, { useState } from "react";
import { Container, Content, Image, Choose, Picker, Select } from "./styles"; 
import { Form } from "@unform/mobile";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import Header from "@/components/header";
import InputMask from "@/components/mask";
import { colors } from "@/constants/colors";
import { Label } from "@/components/label/styles";
import Input from "@/components/input";
import Button from "@/components/button";
import * as ImagePicker from 'expo-image-picker';

const FormItem: React.FC = () => {
  const formRef: any = React.useRef(null);
  const [rawText, setRawText] = useState("");
  const [image, setImage] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<boolean>(true); 
  const [quantity, setQuantity] = useState<string>("");
  const [productName, setProductName] = useState<string>(""); // Para validar o nome do produto
  const [productDescription, setProductDescription] = useState<string>(""); // Para validar a descrição do produto
  const [productValue, setProductValue] = useState<string>(""); // Para validar o valor do produto

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert('Permissão para acessar a galeria');
      return;
    }
  
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!pickerResult.canceled) {
      return pickerResult;
    }
  };

  const selectPicture = async () => {
    try {
      const imageResponse: any = await pickImage(); 
      setImage(() => imageResponse);
    } catch (err) {
      return err;
    }
  };

  const itens = [
    {
      label: "Ativado",
      value: true,
    },
    {
      label: "Desativado",
      value: false,
    },
  ];

  // Função de validação
  const validateForm = () => {
    if (!image) {
      Alert.alert("Erro", "A imagem do produto é obrigatória.");
      return false;
    }
    if (!productName.trim()) {
      Alert.alert("Erro", "O nome do produto é obrigatório.");
      return false;
    }
    if (!productDescription.trim()) {
      Alert.alert("Erro", "A descrição do produto é obrigatória.");
      return false;
    }if (!productValue || productValue.trim() === "") {
      Alert.alert("Erro", "O valor do produto é obrigatório.");
      return false;
    }
    if (!quantity || quantity.trim() === "") {
      Alert.alert("Erro", "A quantidade é obrigatória.");
      return false;
    }
    
    return true;
  };

  const handleSubmit = (data: any) => {
    if (validateForm()) {
      console.log(data);
      Alert.alert("Formulário enviado com sucesso!");
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
                source={!image ? require("../../assets/images/productImage.jpg") : image}
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
              name="value"
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
