import React, { useRef, useEffect, useCallback } from "react";
import { TextInputProps, View, TextInput, StyleSheet } from "react-native"; 
import { useField } from "@unform/core";

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

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        {...rest}
        style={styles.inputComponent}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: '#f0f0f0', 
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc', 
    borderBottomWidth: 1,
  },
  inputComponent: {
    flex: 1,
    width: 250,
    color: '#333', 
  },
});
