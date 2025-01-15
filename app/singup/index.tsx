import React, { useRef, useState } from "react";
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
import { SignUpSchema } from "@/schema/userSchema";

interface RegisterUserData extends RegisterUser {
  passwordConfirm: string;
}

const SignUp: React.FC = () => {
  const formRef: any = useRef(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); 

  const handleSubmit = async (data: RegisterUserData) => {
    try {
      const result = SignUpSchema.safeParse(data);
      if (!result.success) {
        const zodErrors: { [key: string]: string } = {};
        result.error.errors.forEach((error) => {
          zodErrors[error.path[0]] = error.message;
        });
        setErrors(zodErrors);
        return;
      }

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
    }
  };

  return (
    <Container>
      <Header title="Cadastro de usuários" />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Label>Nome:</Label>
          <Input name="name" placeholder="Digite seu nome" error={errors.name} />
          <Label>Email:</Label>
          <Input name="email" placeholder="Digite seu email" error={errors.email} />
          <Label>Senha:</Label>
          <Input
            name="password"
            secureTextEntry
            placeholder="Digite sua senha"
            error={errors.password}
          />
          <Label>Confirmar Senha:</Label>
          <Input
            name="passwordConfirm"
            secureTextEntry
            placeholder="Confirmar sua senha"
            error={errors.passwordConfirm}
          />
          <Button onPress={() => formRef.current?.submitForm()} title="Criar Usuario" />
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
