import React, { useRef } from "react";
import { Form } from "@unform/mobile";
import { Container, Content, Label, Image } from "./styles";
import Title from "@/components/title";
import Input from "@/components/input";
import Button from "@/components/button";
import { router } from "expo-router";
import { StatusBar } from "react-native";


export default function Login() {
  const formRef: any = useRef(null);

  const handleSubmit = async (data: any) => {
    try {
      console.log(data);
      router.push("/home");
    } catch (err) {
    
    }
  };

  return (
          
    
    <Container>
            <StatusBar barStyle="dark-content" />
      
      <Content>
        
        <Image
          source={require("../../assets/images/mindGroup.png")}  
        />
        <Form ref={formRef} onSubmit={handleSubmit}>
          
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
}
