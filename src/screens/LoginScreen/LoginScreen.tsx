import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthButton, CustomInput } from "@components";
import { styles } from "./styles";

type LoginScreenProps = {
  password: string;
  setPassword: (password: string) => void;
  email: string;
  setEmail: (email: string) => void;
  goToRegistrationHandler: () => void;
};

export const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const { setPassword, password, email, setEmail, goToRegistrationHandler } =
    props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <CustomInput placeholder='Email' value={email} onChange={setEmail} />
      <CustomInput
        placeholder='Password'
        value={password}
        onChange={setPassword}
        secure
      />
      <AuthButton title={"Continue"} />
      <TouchableOpacity onPress={goToRegistrationHandler}>
        <Text>Go to sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
