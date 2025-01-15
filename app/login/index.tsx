import React, { useRef, useState } from "react";
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
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = async (data: LoginUser) => {
    try {
      setErrors({}); 

      const response = await postSignInUserAsync(data);

      if (typeof response === "boolean") {
        setErrors({
          email: "Usuário não encontrado.",
          password: "Verifique sua senha.",
        });
        return;
      }

      router.push("/home");
    } catch (err: any) {
      if (err.response && err.response.data) {
        const { details } = err.response.data;
        
        const fieldErrors = details.reduce((acc: any, detail: any) => {
          acc[detail.path] = detail.message;
          return acc;
        }, {});

        setErrors(fieldErrors);
      } else {
        Alert.alert("Erro ao autenticar", "Ocorreu um erro inesperado.");
      }
    }
  };

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Image source={require("../../assets/images/mindGroup.png")} />
          <Title title="Seja Bem Vindo!" />

          <Label>E-mail:</Label>
          <Input
            name="email"
            placeholder="Digite seu e-mail"
            error={errors.email} 
          />
          

          <Label>Senha:</Label>
          <Input
            name="password"
            placeholder="Digite sua senha"
            secureTextEntry
            error={errors.password} 
          />
          

          <Button title="Entrar" onPress={() => formRef.current?.submitForm()} />
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
