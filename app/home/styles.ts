import { colors } from '@/constants/colors';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Content = styled.View`
    width: 80%;
`;