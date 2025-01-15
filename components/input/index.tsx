import React, { useRef, useEffect, useState, useCallback } from "react";
import { TextInputProps, Text } from "react-native"; 
import { useField } from "@unform/core";
import { Container, InputComponent,  } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ name, onChangeText, error, ...rest }: InputProps) => {
  const inputRef: any = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    inputRef.current.value = defaultValue;
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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
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
      {error && <Text style={{ color: 'red' }}>{error}</Text>} 
    </>
  );
};

export default Input;
