import { colors } from '@/constants/colors';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { Container } from './styles';

interface ButtonBackPageProps extends TouchableOpacityProps {}

const ButtonBackPage: React.FC<ButtonBackPageProps> = ({ ...rest } : ButtonBackPageProps) => {
  const handlePress = () => {
    console.log('Você está voltando para a página anterior.');
  };

  return (
    <Container {...rest} onPress={handlePress}>
      <Icon name="doubleleft" size={25} color={colors.white} />
    </Container>
  );
};

export default ButtonBackPage;
