import styled from "styled-components/native";
import { colors } from "@/constants/colors";

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

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  margin-bottom: 8px;
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
