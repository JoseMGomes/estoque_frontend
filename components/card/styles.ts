import { colors } from "@/constants/colors";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
 width: 100%;
  min-height: 100px;
  border-radius: 10px;
  flex-direction: row;
  border: 0.3px solid ${colors.white};
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  background-color: ${colors
  .backgroundCardDefault};
`;

export const Content = styled.View`
  flex-direction: row;
  width: 200px;
  margin-top: 10px;
  padding: 10px;
`;


export const ImageItem = styled.Image`
   width: 100px;
   height: 100px;
   border-radius: 5px;
   margin-right: 10px;
`;