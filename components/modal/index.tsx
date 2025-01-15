import React from "react";
import { Modal, View, Alert } from "react-native";
import {
  ModalContent,
  ModalHeader,
  Text,
  BoldText,
  Button,
  ButtonText,
} from "./styles";
import { ItemProps } from "@/types/itemEstoque";

interface ModalEstoqueProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: ItemProps | null;
  handleUpdateQuantity: () => void;
  handleUpdateProduct: () => void;
  handleDeleteProduct: () => void;
}

const ModalEstoque: React.FC<ModalEstoqueProps> = ({
  visible,
  setVisible,
  selectedItem,
  handleUpdateQuantity,
  handleUpdateProduct,
  handleDeleteProduct,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ModalContent>
          {selectedItem && (
            <ModalHeader>
              <Text>
                <BoldText>Nome:</BoldText> {selectedItem.name}
              </Text>
              <Text>
                <BoldText>Descrição:</BoldText> {selectedItem.description}
              </Text>
              <Text>
                <BoldText>Quantidade:</BoldText> {selectedItem.quantity}
              </Text>
              <Text>
                <BoldText>Preço:</BoldText> R${selectedItem.price}
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
          <Button onPress={() => setVisible(false)}>
            <ButtonText>Fechar</ButtonText>
          </Button>
        </ModalContent>
      </View>
    </Modal>
  );
};

export default ModalEstoque;
