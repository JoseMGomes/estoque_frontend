
import styled from 'styled-components/native';
import { colors } from '@/constants/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
    width: 80%;
`;

export const Label = styled.Text`
    color: ${colors.white };
    margin-top: 20px;
    margin-bottom: 5px;
    max-width: 200px;
`;

export const Image = styled.Image`
    width: 300;
    height: 150;
    margin-bottom: 40;
    margin-left: 15;
    align-self: "center"

`;
