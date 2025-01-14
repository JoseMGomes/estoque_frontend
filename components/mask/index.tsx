import React, { useState, useCallback, forwardRef } from "react";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";
import Input from "../input";



interface InputMask extends TextInputMaskProps {
  name?: string;
  label?: string;
  initial?: string;
  rawText: string;
  setRawText: React.Dispatch<React.SetStateAction<string>>;
}



const InputMask: React.FC<InputMask> = (
  { type, initial,setRawText, rawText, ...rest },
  inputRef
) => {
  const [text, setText] = useState(initial || "");

  const handleChangeText = useCallback(
    (maskedText:any, unmaskedText:any) => {
      setText(maskedText);
      setRawText(unmaskedText);
    },
    [text]
  );

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={text}
      options={{ maskType: "BRL" }}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText,
      }}
      {...rest}
    />
  );
};

export default InputMask;