import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type AuthButtonProps = {
  title: string;
};

export const AuthButton: React.FC<AuthButtonProps> = (props) => {
  const { title } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
