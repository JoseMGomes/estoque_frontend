import { colors } from "@/constants/colors";
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  padding-top: 20px;
  
`;

export const Content = styled.View`
  width: 80%;
  margin-top: 20px;
`;

export const ViewButton =styled.View`
  margin: 5px;
`;