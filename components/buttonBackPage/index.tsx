import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';  

interface ButtonBackPageProps extends TouchableOpacityProps {}

const ButtonBackPage: React.FC<ButtonBackPageProps> = ({ ...rest } : ButtonBackPageProps) => {
  const navigation = useNavigation();  

  const handlePress = () => {
    navigation.goBack();  
  };

  return (
    <Container {...rest} onPress={handlePress}>
      <Icon name="doubleleft" size={25} color="#fff" />
    </Container>
  );
};

export default ButtonBackPage;
