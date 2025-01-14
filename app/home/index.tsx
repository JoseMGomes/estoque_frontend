import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Header,
  HeaderCard,
  HeaderText,
  ButtonContainer,
  IconButton,
} from "./styles";
import Button from "@/components/button";
import { Alert, View } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { getAuthenticatedUserAsync } from "@/services/userServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "@/types/userResponsSing";


const Home: React.FC = () => {
      const [user, setUser] = useState<User|null>()

  const fetchUserData = async () => {
    const userData = await AsyncStorage.getItem("userStorageAsync")
    if (userData ) {
     setUser(JSON.parse(userData))
    }
  };
  useEffect(() => {

    fetchUserData();
  }, []); 

  const handleLogout = () => {
    Alert.alert(
      "Confirmar saída",
      "Você tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: () => {
            console.log("Saindo...");
            router.push("/login");
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleCadastroUsuario = () => {
    console.log("Cadastro de Usuário pressionado");
    router.push("/singup");
  };

  const handleListaEstoque = () => {
    console.log("Lista de Estoque pressionado");
    router.push("/listEstoque");
  };

  const handleAdicionarItem = () => {
    console.log("Adicionar Item pressionado");
    router.push("/formItem");
  };

  return (
    <Container>
      <Header>
        <HeaderCard>
          <HeaderText>{user?.name || "Carregando..."}</HeaderText>
          <HeaderText>{user?.email || "Carregando..."}</HeaderText> 
        </HeaderCard>
        <IconButton onPress={handleLogout}>
          <MaterialIcons name="power-settings-new" size={18} color="white" />
        </IconButton>
      </Header>

      <Content>
        <ButtonContainer>
          <Button title="Cadastro de Usuário" onPress={handleCadastroUsuario} />
          <Button title="Lista de Estoque" onPress={handleListaEstoque} />
          <Button title="Adicionar Item" onPress={handleAdicionarItem} />
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Home;
