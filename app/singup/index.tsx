import React, { useRef } from "react";
import { Container, Content } from "./styles";
import { Alert } from "react-native";
import { Form } from "@unform/mobile";
import { RegisterUser } from "@/types/registerUser";
import Header from "@/components/header";
import Input from "@/components/input";
import Button from "@/components/button";
import { Label } from "../login/styles";
import { router } from "expo-router";

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

      console.log("Dados do formulário:", data);

      if (data.password !== data.passwordConfirm) {
        Alert.alert("Erro", "A senha e a confirmação de senha não são iguais.");
        return false;
      }

      console.log("Usuario cadastrado");
      router.push("/home");
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
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