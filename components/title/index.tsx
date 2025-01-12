import React from 'react';
import { TextProps } from 'react-native';
import { TitleText } from './styles'; 

interface TitleProps extends TextProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title, ...rest }) => {
  return <TitleText {...rest}>{title}</TitleText>; 
};

export default Title;
