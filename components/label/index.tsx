import { Label } from '@/app/login/styles';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';



interface LabelProps extends TouchableOpacityProps{
    title: string;
}

const Button: React.FC<LabelProps> = ({title} : LabelProps) => {
  return (
        <Label>{title}</Label>
  )
}

export default Button;