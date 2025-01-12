
import React, { useRef } from "react";
import {Form } from "@unform/mobile"
import { Container, Content, Label } from "./styles";
import Title from "@/components/title";
import Input from "@/components/input";
import Button from "@/components/button";
import { router } from "expo-router";


export default function Login() {
  const formRef: any = useRef(null);
  const handleSubmit = async (data: any) => {
    try {
      console.log(data)
      router.push("/home")
    } catch (err) {
      
    }
  };

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Title title="Seja Bem Vindo !" />
          <Label>Email:</Label>
          <Input name="email" placeholder="Digite seu email:" />
          <Label>Senha:</Label>
          <Input
            name="password"
            placeholder="Digite sua senha:"
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


