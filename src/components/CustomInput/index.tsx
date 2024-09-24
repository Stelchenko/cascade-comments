import React from "react";
import { TextInput, ViewStyle } from "react-native";
import { styles } from "./styles";

type CustomInputProps = {
  style?: ViewStyle;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  secure?: boolean;
};

export const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { style, placeholder, value, onChange, secure } = props;
  return (
    <TextInput
      style={[styles.container, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      secureTextEntry={secure}
    />
  );
};
