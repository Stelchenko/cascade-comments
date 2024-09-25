import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type AuthButtonProps = {
  title: string;
  onPress: () => void;
};

export const AuthButton: React.FC<AuthButtonProps> = (props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
