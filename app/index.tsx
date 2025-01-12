import React, { useRef } from "react";
import { Form } from "@unform/mobile";
import { Text, View, StyleSheet} from "react-native"; 
import Title from "@/components/title";
import Input from "@/components/input";
import Button from "@/components/button";
import { colors } from "@/constants/colors";

export default function Login() {
  const formRef: any = useRef(null);

  const handleSubmit = async (data: any) => {
    try {
      console.log('vai');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Title title="Seja Bem Vindo !" />
          <Text style={styles.label}>Email:</Text>
          <Input name="email" placeholder="Digite seu email:" />
          <Text style={styles.label}>Senha:</Text>
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
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
  },
  label: {
    color: colors.white,
    marginTop: 20,
    marginBottom: 5,
    maxWidth: 200,
  },
  image: {
    
  },
});
