import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface TitleProps extends TextProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title, ...rest }) => {
  return <Text style={styles.text} {...rest}>{title}</Text>;
};

export default Title;


const styles = StyleSheet.create({
  text: {
    color: '#333', 
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
});
