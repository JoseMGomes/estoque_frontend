import React, { useState, useEffect } from "react";
import { Container, ModalContent, Button, ButtonText, Input, ModalHeader, BoldText, Text } from "./styles";
import { FlatList, ActivityIndicator, Alert, Modal, View, TextInput } from "react-native";
import { ItemProps } from "@/types/itemEstoque";
import Header from "@/components/header";
import Card from "@/components/card";
import { getAllItemsAsync, patchUpdateItemQuantityAsync, deleteItemAsync } from "@/services/estoqueServices";
import { colors } from "@/constants/colors";
import { router } from "expo-router";

interface ItemFlatList {
  index: number;
  item: ItemProps;
}

export const ListEstoque: React.FC = () => {
  const [data, setData] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editQuantityModalVisible, setEditQuantityModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null);
  const [quantityChange, setQuantityChange] = useState<number>(0);

  const fetchItems = async () => {
    const items = await getAllItemsAsync();
    if (items) {
      setData(items);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCardPress = (item: ItemProps) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleUpdateQuantity = () => {
    setEditQuantityModalVisible(true);
    setModalVisible(false);
  };

  const handleAddQuantity = async () => {
    if (selectedItem) {
      const updatedQuantity = selectedItem.quantity + quantityChange;
      const response = await patchUpdateItemQuantityAsync(selectedItem.id.toString(), {
        quantity: quantityChange,
        updateQuantity: "add",
      });

      if (response) {
        fetchItems();
        Alert.alert("Quantidade Atualizada", `A nova quantidade é ${updatedQuantity}`);
        setEditQuantityModalVisible(false);
      }
    }
  };

  const handleRemoveQuantity = async () => {
    if (selectedItem) {
      const updatedQuantity = selectedItem.quantity - quantityChange;
      if (updatedQuantity < 0) {
        Alert.alert("Erro", "A quantidade não pode ser negativa.");
        return;
      }
      const response = await patchUpdateItemQuantityAsync(selectedItem.id.toString(), {
        quantity: quantityChange,
        updateQuantity: "remove",
      });

      if (response) {
        fetchItems();
        Alert.alert("Quantidade Atualizada", `A nova quantidade é ${updatedQuantity}`);
        setEditQuantityModalVisible(false);
      }
    }
  };

  const handleUpdateProduct = () => {
    if (selectedItem) {
      router.push({
        pathname: "/formItem",
        params: {
          id: selectedItem.id.toString(),
          name: selectedItem.name,
          description: selectedItem.description,
          quantity: selectedItem.quantity.toString(),
          price: selectedItem.price.toString(),
          image: selectedItem.image,
        },
      });
    }
  };

  const handleDeleteProduct = async () => {
    Alert.alert(
      "Excluir Produto",
      "Tem certeza que deseja excluir este produto?",
      [
        {
          text: "Cancelar",
          onPress: () => setModalVisible(false),
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            if (selectedItem) {
              const response = await deleteItemAsync(selectedItem.id.toString());
              if (response) {
                Alert.alert("Produto Excluído", "Produto excluído com sucesso");
                setData((prevData) =>
                  prevData.filter((item) => item.id !== selectedItem.id)
                );
              }
            }
            setModalVisible(false);
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <Container>
        <Header title="Listagem de estoque" />
        <ActivityIndicator size="large" color={colors.primary} />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Listagem de estoque" />
      <FlatList
        style={{ width: "90%", height: 500, marginTop: 50 }}
        data={data}
        renderItem={({ item }: ItemFlatList) => (
          <Card item={item} onPress={() => handleCardPress(item)} />
        )}
        keyExtractor={(item: ItemProps) => item.id.toString()}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ModalContent>
            {selectedItem && (
              <ModalHeader>

                <Text>
                 <BoldText> Nome:</BoldText> {selectedItem.name}
                </Text>
                <Text>
                <BoldText> Descrição: </BoldText>{selectedItem.description}
                </Text>
                <Text>
                <BoldText>Quantidade: </BoldText>{selectedItem.quantity}
                </Text>
                <Text>
                <BoldText> Preço: </BoldText>R${selectedItem.price}
                </Text>
              </ModalHeader>
            )}

            <Button onPress={handleUpdateQuantity}>
              <ButtonText>Atualizar Quantidade</ButtonText>
            </Button>
            <Button onPress={handleUpdateProduct}>
              <ButtonText>Atualizar Produto</ButtonText>
            </Button>
            <Button onPress={handleDeleteProduct}>
              <ButtonText>Excluir Produto</ButtonText>
            </Button>
            <Button onPress={() => setModalVisible(false)}>
              <ButtonText>Fechar</ButtonText>
            </Button>
          </ModalContent>
        </View>
      </Modal>

      <Modal visible={editQuantityModalVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ModalContent>
            {selectedItem && (
              <>
              <ModalHeader>
                <Text>
                  <BoldText>Nome:</BoldText> {selectedItem.name}
                </Text>
                <Text>
                  <BoldText>Descrição:</BoldText> {selectedItem.description}
                </Text>
                <Text>
                  <BoldText>Quantidade Atual:</BoldText> {selectedItem.quantity}
                </Text>
                <Input
                  placeholder="Digite a quantidade a adicionar/remover"
                  keyboardType="numeric"
                  value={String(quantityChange)}
                  onChangeText={(text) => setQuantityChange(Number(text))}
                />
                </ModalHeader>

                <Button onPress={handleAddQuantity}>
                  <ButtonText>Adicionar Quantidade</ButtonText>
                </Button>
                <Button onPress={handleRemoveQuantity}>
                  <ButtonText>Remover Quantidade</ButtonText>
                </Button>
                <Button onPress={() => setEditQuantityModalVisible(false)}>
                  <ButtonText>Fechar</ButtonText>
                </Button>
              </>
            )}
          </ModalContent>
        </View>
      </Modal>
    </Container>
  );
};

export default ListEstoque;
