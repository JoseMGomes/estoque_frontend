import styled from "styled-components/native";
import { colors } from "@/constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
  align-items: center;
  padding: 20px;
`;

export const ModalContent = styled.View`
  width: 85%;
  background-color: ${colors.backgroundModal};
  border-radius: 12px;
  padding: 25px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.white};
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalHeader = styled.View`
  padding: 20px;
  border-radius: 10px;
  color: ${colors.white};
`;


export const BoldText = styled.Text`
  font-weight: bold;
  color: ${colors.white};
`;

export const Text= styled.Text`
  color: ${colors.white};
  font-size: 16px;
  margin-bottom: 8px;
`;


export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 15px;
  border-radius: 8px;
  margin-top: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
    background-color: ${colors.white};
  color: ${colors.black}; 
  font-size: 16px;
  margin-top: 12px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${colors.primary}; 
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 12px;
  border-radius: 8px;
  margin-top: 10px;
  width: 100%;
  align-items: center;
`;

export const CloseButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
