import { colors } from '@/constants/colors';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${colors.primary};
  border-radius: 8px;
  margin-top: 30px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
