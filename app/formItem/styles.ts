import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";
import { colors } from "@/constants/colors";
import Button from "@/components/button";


export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;


export const Content = styled.View`
  width: 80%;
  margin-top: 50px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  border-color: ${colors.backgroundCardDefault};
  border-width: 5px;
  align-self: center;
  border-radius: 10px;
`;

export const Picker = styled.View`
  margin-top: 10px;
`;

export const Select = styled(DropDownPicker)`
  border: none;
  background: ${colors.backgroundCardDefault};
  color: white;
  border-bottom-color: ${colors.secondary};
  border-bottom-width: 1px;
  margin-bottom: 30px;
`;

export const Choose = styled.View`
  justify-content: space-between;
`;

export const NewButton = styled(Button)`
  margin-bottom: 20px;
`;