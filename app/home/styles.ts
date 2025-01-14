import styled from 'styled-components/native';
import { Text, View, TouchableOpacity } from 'react-native';
import { colors } from '@/constants/colors';


export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black}; 
  padding: 20px;
`;


export const Content = styled.View`
  flex: 1;
  justify-content: flex-start; 
  margin-top: 20px;
`;


export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start; 
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  background-color: #1c1c1c; 
  padding: 15px;
  border-radius: 10px;
  elevation: 5;
  margin-right: 10px;  
`;


export const HeaderCard = styled.View`
  background-color: #1c1c1c; 
  padding: 15px;
  border-radius: 10px;
  elevation: 5;
  flex: 1; 
  margin-right: 10px; 
`;


export const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px; 
`;


export const IconButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px; 
`;



export const ButtonContainer = styled.View`
  margin-top: 10px;
  flex-direction: column;
  gap: 15px;
`;

