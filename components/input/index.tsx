import React, { useRef, useEffect, useState, useCallback } from "react";
import { TextInputProps } from "react-native"; 
import { useField } from "@unform/core";
import { Container, InputComponent } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({
  name,
  onChangeText,
  ...rest
}: InputProps) => {
  const inputRef: any = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);  // Estado para controlar o foco

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return "";
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: "" });
          inputRef.current.value = "";
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    (text: string) => {
      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText]
  );

  // Funções para controlar o foco
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container>
      <InputComponent
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        placeholderTextColor="#888"
        onFocus={handleFocus}  
        onBlur={handleBlur}    
        
        {...rest}
      />
    </Container>
  );
};

export default Input;
