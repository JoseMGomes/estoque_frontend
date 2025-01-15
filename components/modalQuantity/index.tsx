import React, { useState } from 'react';
import { Modal, TextInput, View } from 'react-native';
import { ModalContent, Text } from '../modal/styles';
import Button from '../button';
import { ItemProps } from '@/types/itemEstoque';

interface ModalQuantityProps {
    visible: boolean;
    quantityChange: number;
    setQuantityChange: React.Dispatch<React.SetStateAction<number>>;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    selectedItem: ItemProps | null;
    handleAddQuantity: () => void;
    handleRemoveQuantity: () => void;
}

const ModalQuantity: React.FC<ModalQuantityProps> = ({ 
     visible,
     quantityChange,
     setQuantityChange,
     selectedItem, 
     setVisible, 
     handleAddQuantity, 
     handleRemoveQuantity
}) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
        >
            <View
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <ModalContent>
                    {selectedItem && (
                        <>
                            <Text>Nome: {selectedItem.name}</Text>
                            <Text>Descrição: {selectedItem.description}</Text>
                            <Text>Quantidade Atual: {selectedItem.quantity}</Text>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    padding: 10,
                                    marginVertical: 10,
                                    width: "80%",
                                }}
                                placeholder="Digite a quantidade a adicionar/remover"
                                keyboardType="numeric"
                                value={String(quantityChange)}
                                onChangeText={(text) => setQuantityChange(Number(text))}
                            />

                            <Button
                                title="Adicionar Quantidade"
                                onPress={handleAddQuantity}
                            />
                            <Button
                                title="Remover Quantidade"
                                onPress={handleRemoveQuantity}
                            />
                            <Button
                                title="Fechar"
                                onPress={() => setVisible(false)}
                            />
                        </>
                    )}
                </ModalContent>
            </View>
        </Modal>
    );

};

export default ModalQuantity;