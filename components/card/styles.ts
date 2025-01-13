import { colors } from "@/constants/colors";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  min-height: 120px; /* Ajustado para acomodar mais conteúdo */
  border-radius: 10px;
  flex-direction: row;
  border: 0.3px solid ${colors.white};
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  background-color: ${colors.backgroundCardDefault};
  padding: 10px; /* Adicionado para espaçamento interno */
`;

export const Content = styled.View`
  flex-direction: row;
  flex: 1; /* Para o conteúdo ocupar o espaço restante */
  align-items: center; /* Alinha itens verticalmente */
`;

export const ImageItem = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const TextContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const PriceText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  margin-bottom: 5px;
`;

export const QuantityContainer = styled.View`
  align-items: flex-end;
  justify-content: center;
  margin-left: 10px;
`;
