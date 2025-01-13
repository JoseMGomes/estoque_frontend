import React, { useRef } from "react";
import { Form } from "@unform/mobile";
import { Container, Content, Image, Label } from "./styles";
import { Alert } from "react-native";
import { postSignInUserAsync } from "@/services/userServices";
import { router } from "expo-router";
import Title from "@/components/title";
import Button from "@/components/button";
import { LoginUser } from "@/types/loginUser";
import Input from "@/components/input";

const Login: React.FC = () => {
  const formRef: any = useRef(null);

  const handleSubmit = async (data: LoginUser) => {
    try {
      const response = await postSignInUserAsync(data);
      console.log("botão entrar");

      if (typeof response === "boolean") {
        Alert.alert("Erro", "Verifique sua senha e email");
        return false;
      }
      router.push("/home")
    } catch (err) {
      Alert.alert("Erro ao autenticar", "Verifique sua senha e email");
    }
  };

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
        <Image source={require("../../assets/images/mindGroup.png")}/>
          <Title title="Seja Bem Vindo!" />
          <Label>Email:</Label>
          <Input name="email" placeholder="Digite seu email" />
          <Label>Senha:</Label>
          <Input
            name="password"
            placeholder="Digite sua senha"
            secureTextEntry
          />
          <Button
            title="Entrar"
            onPress={() => formRef.current?.submitForm()}
          />
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
