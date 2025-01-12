import React from 'react';
import { Container, Content } from './styles';
import Button from '@/components/button';
import Title from '@/components/title';
import { Alert } from 'react-native';
import { router } from 'expo-router';

const Home: React.FC = () => {

  const handleLogout = () => {
    Alert.alert(
      'Confirmar saída',
      'Você tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelado'),
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: () => {
            console.log('Saindo...');
            router.push('/login'); 
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleCadastroUsuario = () => {
    console.log('Cadastro de Usuário pressionado');
    router.push("/singup");
  };

  const handleListaEstoque = () => {
    console.log('Lista de Estoque pressionado');
    router.push("/listEstoque")
  };

  const handleAdicionarItem = () => {
    console.log('Adicionar Item pressionado');
  };

  return (
    <Container>
      <Content>
        <Title title="O que gostaria de fazer?" />
        <Button title="Cadastro de Usuario" onPress={handleCadastroUsuario} />
        <Button title="Lista de Estoque" onPress={handleListaEstoque} />
        <Button title="Adicionar Item" onPress={handleAdicionarItem} />
        <Button title="Sair" onPress={handleLogout} />
      </Content>
    </Container>
  );
};

export default Home;
