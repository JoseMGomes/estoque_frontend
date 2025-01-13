import React, { useRef } from "react";
import { Container, Content } from "./styles";
import { Alert } from "react-native";
import { Form } from "@unform/mobile";
import { RegisterUser } from "@/types/registerUser";
import Header from "@/components/header";
import Input from "@/components/input";
import Button from "@/components/button";
import { router } from "expo-router";
import { Label } from "@/components/label/styles";
import { postRegisterUserAsync } from "@/services/userServices";


interface RegisterUserData extends RegisterUser {
  passwordConfirm: string;
}

const SingUp: React.FC = () => {
  const formRef: any = useRef(null);

  async function handleSubmit(data: RegisterUserData) {
    try {
      if (!data.name || !data.email || !data.password || !data.passwordConfirm) {
        Alert.alert("Erro", "Por favor, preencha todos os campos.");
        return false;
      }

      console.log("Usuario cadastrado");
      console.log("Dados do formulário:", data);

      if (data.password !== data.passwordConfirm) {
        Alert.alert("Erro", "A senha e a confirmação de senha não são iguais.");
        return false;
      }

      
      const response = await postRegisterUserAsync(data);

      if (response) {
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
        router.push("/home");  
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
      }
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
      Alert.alert("Erro", "Ocorreu um erro ao processar o cadastro.");
      return false;
    }
  }

  return (
    <Container>
      <Header title="Cadastro de usuarios" />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Label>Nome:</Label>
          <Input name="name" placeholder="Digite seu nome:" />
          <Label>Email:</Label>
          <Input name="email" placeholder="Digite seu email:" />
          <Label>Senha:</Label>
          <Input
            name="password"
            secureTextEntry
            placeholder="Digite sua senha:"
          />
          <Label>Confirmar Senha:</Label>
          <Input
            name="passwordConfirm"
            secureTextEntry
            placeholder="Confirmar sua senha:"
          />
          <Button
            onPress={() => formRef.current?.submitForm()}
            title="Criar Usuario"
          />
        </Form>
      </Content>
    </Container>
  );
};

export default SingUp;
