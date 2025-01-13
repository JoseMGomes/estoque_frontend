import styled from "styled-components/native";
import { colors } from "@/constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  padding: 20px;
`;

export const ModalContent = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  margin-bottom: 15px;
  width: 100%;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${colors.primary};
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 12px;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

